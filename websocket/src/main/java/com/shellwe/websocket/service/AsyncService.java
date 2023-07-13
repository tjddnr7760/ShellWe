package com.shellwe.websocket.service;

import com.shellwe.websocket.dto.ChatRoom;
import com.shellwe.websocket.entity.Member;
import com.shellwe.websocket.entity.Message;
import com.shellwe.websocket.entity.Room;
import com.shellwe.websocket.repository.MessageRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.TextMessage;

import java.util.Map;

@Slf4j
@Component
public class AsyncService {
    private final MessageRepository messageRepository;

    public AsyncService(MessageRepository messageRepository) {
        this.messageRepository = messageRepository;
    }

    @Async("threadPoolTaskExecutor")
    public void saveMessage(Map<Long, ChatRoom> chatRooms, TextMessage textMessage, long roomId, long memberId){
        long joinedMemberNumber = chatRooms.get(roomId).getSessions().size();
        Message message = Message.builder()
                .room(new Room(roomId))
                .member(new Member(memberId))
                .payload(textMessage.getPayload())
                .build();

        if(joinedMemberNumber<2) message.setUnread(true);

        messageRepository.save(message);
    }
}
