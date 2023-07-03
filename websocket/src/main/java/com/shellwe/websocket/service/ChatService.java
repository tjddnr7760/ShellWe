package com.shellwe.websocket.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.shellwe.websocket.dto.ChatRoom;
import com.shellwe.websocket.dto.WsDto;
import com.shellwe.websocket.entity.Member;
import com.shellwe.websocket.entity.MemberRoom;
import com.shellwe.websocket.entity.Room;
import com.shellwe.websocket.mapper.WsMapper;
import com.shellwe.websocket.repository.MemberRoomRepository;
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
    private final WsMapper wsMapper;
    private Map<Long, ChatRoom> chatRooms;


    @PostConstruct
    private void init() {
        chatRooms = new LinkedHashMap<>();
    }

    public List<WsDto.Response> findAllRoom() {


        long myId = 1; // security context holder 접근 필요
        List<MemberRoom> memberRooms = memberRoomRepository.findAllMyRoomsWithSeller(myId);


        // API명세서에 나온대로 response Dto 만들어서 리턴 주기
        return wsMapper.memberRoomsToWsResponses(memberRooms);
    }

    public ChatRoom findRoomById(Long roomId) {
        // db에서 룸 검색
        return chatRooms.get(roomId);
    }

    public ChatRoom createRoom(WsDto.Post requestBody) {
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

        // 메세지 생성

        ChatRoom chatRoom = ChatRoom.builder()
                .roomId(newRoom.getRoomId())
                .build();
        chatRooms.put(newRoom.getRoomId(), chatRoom);
        return chatRoom;
    }

    public <T> void sendMessage(WebSocketSession session, T message) {
        try {
            session.sendMessage(new TextMessage(objectMapper.writeValueAsString(message)));
        } catch (IOException e) {
            log.error(e.getMessage(), e);
        }
    }

}