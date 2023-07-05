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
    private final WsService wsService;
    private final Gson gson;
    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception, IOException{
        wsService.getPreviousMessages(session);
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
        wsService.terminateSession(session);
    }
}















