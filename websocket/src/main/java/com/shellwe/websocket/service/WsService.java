package com.shellwe.websocket.service;


import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.shellwe.websocket.auth.memberDetails.MemberContextInform;
import com.shellwe.websocket.dto.ChatRoom;
import com.shellwe.websocket.dto.MemberDto;
import com.shellwe.websocket.dto.MessageDto;
import com.shellwe.websocket.dto.QueryDto;
import com.shellwe.websocket.entity.Member;
import com.shellwe.websocket.entity.MemberRoom;
import com.shellwe.websocket.entity.Message;
import com.shellwe.websocket.entity.Room;
import com.shellwe.websocket.exception.businessLogicException.BusinessLogicException;
import com.shellwe.websocket.exception.businessLogicException.ExceptionCode;
import com.shellwe.websocket.mapper.RoomMapper;
import com.shellwe.websocket.repository.MemberRepository;
import com.shellwe.websocket.repository.MemberRoomRepository;
import com.shellwe.websocket.repository.MessageRepository;
import com.shellwe.websocket.repository.RoomRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Async;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;

import javax.transaction.Transactional;
import java.io.IOException;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.*;
import java.util.stream.Collectors;

@Slf4j
@Service
@Transactional
public class WsService extends com.shellwe.websocket.service.Service {
    private final ObjectMapper objectMapper;
    private final AsyncService asyncService;
    private Map<Long, ChatRoom> chatRooms = new LinkedHashMap<>();
    public WsService(MemberRoomRepository memberRoomRepository,
                     MemberRepository memberRepository,
                     RoomRepository roomRepository,
                     MessageRepository messageRepository,
                     RoomMapper roomMapper,
                     ObjectMapper objectMapper,
                     AsyncService asyncService) {
        super(memberRoomRepository, memberRepository, roomRepository, messageRepository, roomMapper);
        this.objectMapper = objectMapper;
        this.asyncService = asyncService;
    }

    public void handleMessage(WebSocketSession session, TextMessage message) throws IOException {
        long roomId = getRoomId(session);
        MemberDto.Response member = getMemberResponse(session);
        asyncService.saveMessage(chatRooms, message, roomId, member.getId());
        sendMessage(session, message, member, roomId);
    }
    private void sendMessage(WebSocketSession session, TextMessage message, MemberDto.Response member, long roomId) throws IOException {
        ChatRoom chatRoom = chatRooms.get(roomId);

        chatRoom.getSessions().forEach(sessions->{
            MessageDto.Response response = MessageDto.Response.builder()
                    .roomId(roomId)
                    .payload(message.getPayload())
                    .createdAt(Timestamp.valueOf(LocalDateTime.now()).toLocalDateTime())
                    .member(member)
                    .build();
            if(sessions.equals(session)) response.setMine(true);
            try {
                sessions.sendMessage(new TextMessage(objectMapper.writeValueAsString(response)));
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        });
    }

    public void terminateSession(WebSocketSession session){
        long roomId = getRoomId(session);

        chatRooms.get(roomId).removeSession(session);
        if(chatRooms.get(roomId).getSessions().size()==0) chatRooms.remove(roomId);
    }

    public void getPreviousMessages(WebSocketSession session) throws IOException {
        long roomId = getRoomId(session);
        MemberDto.Response member = getMemberResponse(session);

        joinRoom(session, roomId);
        findExistsMemberRoom(session,roomId,member.getId());

        List<MessageDto.Response> responses = getMessageResponse(roomId, member.getId());

        responses.forEach(r-> {
            try {
                log.info("thread");
                session.sendMessage(new TextMessage(objectMapper.writeValueAsString(r)));
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        });
    }

    private ChatRoom joinRoom(WebSocketSession session, long roomId){
        if(chatRooms.containsKey(roomId)){
            chatRooms.get(roomId).setSessions(session);
        }else {
            ChatRoom chatRoom = new ChatRoom(roomId);
            chatRoom.setSessions(session);
            chatRooms.put(roomId, chatRoom);
        }
        return chatRooms.get(roomId);
    }

    private List<MessageDto.Response> getMessageResponse(long roomId, long memberId){
        List<Message> messages = messageRepository.findAllByRoomOrderByIdAsc(new Room(roomId));

        List<MessageDto.Response> responses = messages.stream()
                .map(message->{
                    modifyUnreadMessage(message,memberId);
                    return roomMapper.messageToMessageResponse(message, memberId);
                })
                .collect(Collectors.toList());

        return responses;
    }

    private void modifyUnreadMessage(Message message, long memberId){
        if(!message.isNotification() && message.getMember().getId()!=memberId && message.isUnread()){
            message.setUnread(false);
            messageRepository.save(message);
        }
    }

    private MemberRoom findExistsMemberRoom(WebSocketSession session, long roomId, long memberId) throws IOException {
        Optional<MemberRoom> optionalMemberRoom = memberRoomRepository.findByRoomAndMemberAndActiveTrue(new Room(roomId), new Member(memberId));
        if(optionalMemberRoom.isEmpty()) {
            MessageDto.Response message = MessageDto.Response.builder()
                    .notification(true)
                    .roomId(roomId)
                    .createdAt(Timestamp.valueOf(LocalDateTime.now()).toLocalDateTime())
                    .payload("해당 채팅방의 접근권한이 없습니다.")
                    .build();
            session.sendMessage(new TextMessage(objectMapper.writeValueAsString(message)));
            throw new BusinessLogicException(ExceptionCode.MEMBER_ROOM_NOT_FOUND);
        }else return optionalMemberRoom.get();
    }

}
