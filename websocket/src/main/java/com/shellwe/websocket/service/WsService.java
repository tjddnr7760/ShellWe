package com.shellwe.websocket.service;


import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.shellwe.websocket.dto.ChatRoom;
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
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;

import java.io.IOException;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.*;
import java.util.stream.Collectors;

@Slf4j
@RequiredArgsConstructor
@Service
public class WsService {
    private final ObjectMapper objectMapper;
    private final MessageRepository messageRepository;
    private final MemberRoomRepository memberRoomRepository;
    private final RoomMapper roomMapper;
    private final HttpService httpService;
    private final Gson gson;
    private Map<Long, ChatRoom> chatRooms = new LinkedHashMap<>();

    public void handleMessage(WebSocketSession session, TextMessage message) throws IOException {
        // 각세션에 메세지 전송, 비동기
        QueryDto query = getQuery(session);
        long roomId = query.getRoomId();
        long memberId = 1L; // 컨텍스트 홀더 필요

        saveMessage(message,roomId,memberId);
        sendMessage(session, message, roomId);

    }
    private void sendMessage(WebSocketSession session, TextMessage message, long roomId) throws IOException {
        long memberId = 1L; // 컨텍스트 홀더 필요

        Member member = httpService.findExistsMember(memberId); // 시큐리티 적용후 세션 혹은 컨텍스트 홀더에서 사용자 정보를 구할 수 있을시 로직 변경

        ChatRoom chatRoom = chatRooms.get(roomId);

        chatRoom.getSessions().forEach(sessions->{
            MessageDto.Response response = MessageDto.Response.builder()
                    .roomId(roomId)
                    .payload(message.getPayload())
                    .createdAt(Timestamp.valueOf(LocalDateTime.now()).toLocalDateTime())
                    .member(roomMapper.memberToMemberResponse(member))
                    .build();
            if(sessions.equals(session)) response.setMine(true);
            try {
                sessions.sendMessage(new TextMessage(objectMapper.writeValueAsString(response)));
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        });
    }

    private void saveMessage(TextMessage textMessage, long roomId, long memberId){
        new Thread(()->{
            Message message = new Message();
            message.setRoom(new Room(roomId));
            message.setMember(new Member(memberId));
            message.setPayload(textMessage.getPayload());

            messageRepository.save(message);
        }).start();
    }


    public void terminateSession(WebSocketSession session){
        QueryDto query = getQuery(session);
        long roomId = query.getRoomId();

        chatRooms.get(roomId).removeSession(session);
        if(chatRooms.get(roomId).getSessions().size()==0) chatRooms.remove(roomId);
    }

    public void getPreviousMessages(WebSocketSession session) throws IOException {
        long roomId = getQuery(session).getRoomId();
        long memberId = 1L; // 시큐리티 컨텍스트 홀더

        joinRoom(session, roomId);
        findExistsMemberRoom(session,roomId,memberId);

        List<MessageDto.Response> responses = getMessageResponse(roomId, memberId);

        responses.forEach(r-> {
            try {
                session.sendMessage(new TextMessage(objectMapper.writeValueAsString(r)));
                // 메세지들 Unread true 필터로 찾은후 false로 바꾸기
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        });
    }

    private QueryDto getQuery(WebSocketSession session){
        // security context holder에 접근이 가능하면 memberId는 뺄수 있음

        QueryDto query = new QueryDto();
        Arrays.stream(session.getUri().getQuery().split("&"))
                .map(s -> s.split("="))
                .forEach(a->{
                    if(a[0].equals("roomId")) query.setRoomId(Long.parseLong(a[1]));
                    else if (a[0].equals("memberId")) query.setMemberId(Long.parseLong(a[1]));
                });
        return query;
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
        List<Message> messages = messageRepository.findAllByRoomOrderByMessageIdAsc(new Room(roomId));

        List<MessageDto.Response> responses = messages.stream()
                .map(message->roomMapper.messageToMessageResponse(message, memberId))
                .collect(Collectors.toList());

        return responses;
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
