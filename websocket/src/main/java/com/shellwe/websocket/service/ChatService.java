package com.shellwe.websocket.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.shellwe.websocket.dto.ChatRoom;
import com.shellwe.websocket.dto.RoomDto;
import com.shellwe.websocket.entity.Member;
import com.shellwe.websocket.entity.MemberRoom;
import com.shellwe.websocket.entity.Message;
import com.shellwe.websocket.entity.Room;
import com.shellwe.websocket.mapper.RoomMapper;
import com.shellwe.websocket.repository.MemberRoomRepository;
import com.shellwe.websocket.repository.MessageRepository;
import com.shellwe.websocket.repository.RoomRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;

import javax.annotation.PostConstruct;
import java.io.IOException;
import java.util.*;

@Slf4j
@RequiredArgsConstructor
@Service
public class ChatService {
    private final RoomRepository roomRepository;
    private final ObjectMapper objectMapper;
    private final MemberRoomRepository memberRoomRepository;
    private final MessageRepository messageRepository;
    private final RoomMapper roomMapper;

    public List<RoomDto.Response> findAllRoom() {
        long myId = 1; // security context holder 접근 필요
        List<MemberRoom> memberRooms = memberRoomRepository.findAllMyRoomsWithSeller(myId);

        return roomMapper.memberRoomsToWsResponses(memberRooms);
    }

    public ChatRoom findRoomById(Long roomId) {
        // db에서 룸 검색, 이후 메세지 로직



//        return chatRooms.get(roomId);
        return null;
    }

    public ChatRoom createRoom(RoomDto.Post requestBody) {
        Room newRoom = roomRepository.save(new Room());

        long myId = 1; // security context holder 접근 필요

        Member me = new Member(myId);
        Member seller = new Member(requestBody.getSellerMemberId());

        MemberRoom memberRoom = new MemberRoom();
        memberRoom.setRoom(newRoom);
        memberRoom.setMember(me);

        MemberRoom memberRoom2 = new MemberRoom();
        memberRoom2.setMember(seller);
        memberRoom2.setRoom(newRoom);

        memberRoomRepository.save(memberRoom);
        memberRoomRepository.save(memberRoom2);
        // =========== 룸 생성, 멤버 연결

        Message message = new Message();
        message.setRoom(newRoom);
        message.setMember(new Member(myId));
        message.setPayload("/shells/"+requestBody.getMyShellId()+"와 교환하기를 원합니다.");

        Message message2 = new Message();
        message2.setRoom(newRoom);
        message2.setMember(new Member(requestBody.getSellerMemberId()));
        message2.setPayload("/shells/"+requestBody.getSellerShellId()+"와 교환하기를 원합니다.");

        messageRepository.save(message);
        messageRepository.save(message2);
        // 초기 메세지 생성 ChatRoom.handleActions 참고

        // 이후 컨트롤러와 조정해서 리턴값 생성

//        ChatRoom chatRoom = ChatRoom.builder()
//                .roomId(newRoom.getRoomId())
//                .build();
//        chatRooms.put(newRoom.getRoomId(), chatRoom);
//        return chatRoom;
        return null;
    }

    public <T> void sendMessage(WebSocketSession session, T message) {
        try {
            session.sendMessage(new TextMessage(objectMapper.writeValueAsString(message)));
        } catch (IOException e) {
            log.error(e.getMessage(), e);
        }
    }

}