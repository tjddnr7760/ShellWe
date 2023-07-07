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

import javax.transaction.Transactional;
import java.io.IOException;
import java.util.*;
import java.util.stream.Collectors;

@Slf4j
@RequiredArgsConstructor
@Component
@Transactional
public class WebSockChatHandler extends TextWebSocketHandler {
    private final ObjectMapper objectMapper;
    private final HttpService httpService;
    private final WsService wsService;
    private final Gson gson;
    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception, IOException{
        // 시큐리티 컨텍스트 홀더 체크해보기
        // 세션의 핸드쉐이크 헤더 체크해보기
        // 세션의 principal에 사용자의 정보 넣기

        wsService.getPreviousMessages(session);
    }



    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
        wsService.handleMessage(session,message);
    }

    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
        wsService.terminateSession(session);
    }
}















