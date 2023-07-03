package com.shellwe.websocket.handler;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.shellwe.websocket.dto.ChatMessage;
import com.shellwe.websocket.dto.ChatRoom;
import com.shellwe.websocket.service.ChatService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

@Slf4j
@RequiredArgsConstructor
@Component
public class WebSockChatHandler extends TextWebSocketHandler {
    private final ObjectMapper objectMapper;
    private final ChatService chatService;

    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
        // ws request는 제일 먼저 여기로 옴

        String payload = message.getPayload();
        log.info("payload {}", payload);
        ChatMessage chatMessage = objectMapper.readValue(payload, ChatMessage.class);

        ChatRoom room = chatService.findRoomById(chatMessage.getRoomId());
        //

        room.handleActions(session, chatMessage, chatService);
    }
}