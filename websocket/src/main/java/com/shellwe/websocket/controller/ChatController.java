package com.shellwe.websocket.controller;

import com.shellwe.websocket.dto.ChatRoom;
import com.shellwe.websocket.dto.RoomDto;
import com.shellwe.websocket.service.ChatService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RequiredArgsConstructor
@RestController
@RequestMapping("/chat")
@Valid
public class ChatController {

    private final ChatService chatService;

    @PostMapping
    public ChatRoom createRoom(@RequestBody RoomDto.Post requestBody) {

        return chatService.createRoom(requestBody);
    }

    @GetMapping
    public ResponseEntity findAllRoom() { // 로그인 된 유저의 id와 연결된 모든 room 출력
        return new ResponseEntity(chatService.findAllRoom(), HttpStatus.OK);
    }

    @GetMapping("/{roomId}")
    public ResponseEntity getRoom(){
        return null;
    }
}