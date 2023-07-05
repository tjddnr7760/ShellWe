package com.shellwe.websocket.dto;

import com.shellwe.websocket.service.HttpService;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.springframework.web.socket.WebSocketSession;

import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
public class ChatRoom {
    private Long roomId;
    private Set<WebSocketSession> sessions = new HashSet<>();

    public ChatRoom(Long roomId) {
        this.roomId = roomId;
    }

    public void setSessions(WebSocketSession session){
        sessions.add(session);
    }
    public void removeSession(WebSocketSession session) {sessions.remove(session);}


    public void handleActions(WebSocketSession session, ChatMessage chatMessage, HttpService httpService) {
        if (chatMessage.getType().equals(ChatMessage.MessageType.ENTER)) {
            sessions.add(session);
            chatMessage.setMessage(chatMessage.getSender() + "님이 입장했습니다.");
        }
        sendMessage(chatMessage, httpService);
    }

    public <T> void sendMessage(T message, HttpService httpService) {
        sessions.parallelStream().forEach(session -> httpService.sendMessage(session, message));
    }
}
