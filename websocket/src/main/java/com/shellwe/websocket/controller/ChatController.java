package com.shellwe.websocket.controller;

import com.shellwe.websocket.dto.ChatRoom;
import com.shellwe.websocket.service.ChatService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/chat")
public class ChatController {

    private final ChatService chatService;

    @PostMapping
    public ChatRoom createRoom() {
        return chatService.createRoom();
    }

    @GetMapping
    public List<ChatRoom> findAllRoom() { // 로그인 된 유저의 id와 연결된 모든 room 출력
        return chatService.findAllRoom();
    }
}