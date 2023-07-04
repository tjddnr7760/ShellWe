package com.shellwe.websocket.service;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.shellwe.websocket.dto.ChatRoom;
import com.shellwe.websocket.dto.MessageDto;
import com.shellwe.websocket.dto.QueryDto;
import com.shellwe.websocket.entity.Message;
import com.shellwe.websocket.entity.Room;
import com.shellwe.websocket.mapper.RoomMapper;
import com.shellwe.websocket.repository.MemberRepository;
import com.shellwe.websocket.repository.MessageRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.socket.WebSocketSession;

import java.util.*;
import java.util.stream.Collectors;

@Slf4j
@RequiredArgsConstructor
@Service
public class WsService {
    private final ObjectMapper objectMapper;
    private final HttpService httpService;
    private final MessageRepository messageRepository;
    private final RoomMapper roomMapper;
    private final MemberRepository memberRepository;
    private Map<Long, ChatRoom> chatRooms = new LinkedHashMap<>();
    public QueryDto getQuery(WebSocketSession session){
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
    public ChatRoom joinRoom(WebSocketSession session){
        // 연결시 db에 저장된 룸의 메세지들을 현재 세션에 출력 (모든 세션을 식별할 필요가 없어짐)
        // 문제는 상대방이 메세지를 보냈을때 ws에서 감지할 수 있는가? 룸이라는 맵 무조건 필요한듯

        long roomId = getQuery(session).getRoomId();
        // 챗룸 생성 및 세션 정보 넣기, 챗룸이 있을경우 세션정보만
        // service로 로직 옴겨주기
        // DB에서 사용자 중복검색을 안함

        if(chatRooms.containsKey(roomId)){
            chatRooms.get(roomId).setSessions(session);
        }else {
            ChatRoom chatRoom = new ChatRoom(roomId);
            chatRoom.setSessions(session);
            chatRooms.put(roomId, chatRoom);
        }
        return chatRooms.get(roomId);
    }

    public List<MessageDto.Response> getMessageResponse(WebSocketSession session){
        QueryDto query = getQuery(session);
        long roomId = query.getRoomId();
        long memberId = query.getMemberId();

        List<Message> messages = messageRepository.findAllByRoomOrderByMessageIdAsc(new Room(roomId));

        // 모든 메세지들 + 작성자의 정보를 response dto로 변환 (맵퍼생성하기)
        List<MessageDto.Response> responses = messages.stream()
                .map(message->roomMapper.messageToMessageResponse(message, memberId))
                .collect(Collectors.toList());

        return responses;
    }
}
