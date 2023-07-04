package com.shellwe.websocket.dto;

import com.shellwe.websocket.service.ChatService;
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
    @Builder.Default
    private Set<WebSocketSession> sessions = new HashSet<>();
    @Builder.Default
    private Set<ChatMember> members = new HashSet<>();

    public ChatRoom(Long roomId) {
        this.roomId = roomId;
    }

    public void setMembers(ChatMember chatMember){
        members.add(chatMember);
    }

    public void handleActions(WebSocketSession session, ChatMessage chatMessage, ChatService chatService) {
        if (chatMessage.getType().equals(ChatMessage.MessageType.ENTER)) {
            sessions.add(session);
            chatMessage.setMessage(chatMessage.getSender() + "님이 입장했습니다.");
        }
        sendMessage(chatMessage, chatService);
    }

    public <T> void sendMessage(T message, ChatService chatService) {
        sessions.parallelStream().forEach(session -> chatService.sendMessage(session, message));
    }
}
