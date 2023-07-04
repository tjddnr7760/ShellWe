package com.shellwe.websocket.handler;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.shellwe.websocket.dto.*;
import com.shellwe.websocket.entity.Message;
import com.shellwe.websocket.entity.Room;
import com.shellwe.websocket.mapper.RoomMapper;
import com.shellwe.websocket.repository.MemberRepository;
import com.shellwe.websocket.repository.MessageRepository;
import com.shellwe.websocket.service.HttpService;
import com.shellwe.websocket.service.WsService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.io.IOException;
import java.util.*;
import java.util.stream.Collectors;

@Slf4j
@RequiredArgsConstructor
@Component
public class WebSockChatHandler extends TextWebSocketHandler {
    private final ObjectMapper objectMapper;
    private final HttpService httpService;
    private final MessageRepository messageRepository;
    private final RoomMapper roomMapper;
    private final MemberRepository memberRepository;
    private final WsService wsService;
    private final Gson gson;
    private Map<Long, ChatRoom> chatRooms = new LinkedHashMap<>();

    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception, IOException{
        // session을 room에 참여 시키기
        wsService.joinRoom(session);

        // db에 저장된 이전 메세지들 로딩
        List<MessageDto.Response> responses = wsService.getMessageResponse(session);

        // 이전 메세지들 세션에 보내기
        responses.forEach(r-> {
            try {
                session.sendMessage(new TextMessage(objectMapper.writeValueAsString(r)));
                // 메세지들 Unread true 필터로 찾은후 false로 바꾸기
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        });
    }



    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
        // ws request는 제일 먼저 여기로 옴


        String payload = message.getPayload();
        log.info("payload {}", payload);
        ChatMessage chatMessage = objectMapper.readValue(payload, ChatMessage.class);

        ChatRoom room = httpService.findRoomById(chatMessage.getRoomId());
        //

        room.handleActions(session, chatMessage, httpService);
    }

    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
        // WebSocket 연결이 닫히면 사용자를 채팅 방에서 제거
        String roomId = session.getUri().getQuery();
        String participantId = session.getId();
//        chatRoomService.removeParticipant(roomId, participantId);
        log.info("사용자 '{}'가 채팅 방 '{}'에서 나갔습니다.", participantId, roomId);
    }
}















