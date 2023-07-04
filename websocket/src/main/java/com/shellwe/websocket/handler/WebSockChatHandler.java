package com.shellwe.websocket.handler;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.shellwe.websocket.dto.*;
import com.shellwe.websocket.entity.Message;
import com.shellwe.websocket.entity.Room;
import com.shellwe.websocket.mapper.RoomMapper;
import com.shellwe.websocket.repository.MemberRepository;
import com.shellwe.websocket.repository.MessageRepository;
import com.shellwe.websocket.service.ChatService;
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
    private final ChatService chatService;
    private final MessageRepository messageRepository;
    private final RoomMapper roomMapper;
    private final MemberRepository memberRepository;
    private final Gson gson;
    private Map<Long, ChatRoom> chatRooms = new LinkedHashMap<>();

    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception, IOException{
        System.out.println("afterConnectionEstablished:" + session);
        // sessionId가 계속 바뀜

        // 연결시 db에 저장된 룸의 메세지들을 현재 세션에 출력 (모든 세션을 식별할 필요가 없어짐)
        // 문제는 상대방이 메세지를 보냈을때 ws에서 감지할 수 있는가? 룸이라는 맵 무조건 필요한듯

        // uri에서 member와 room id 분리
        HashMap<String, Long> attribute = new HashMap<>();
        Arrays.stream(session.getUri().getQuery().split("&"))
                .map(s -> s.split("="))
                .forEach(a-> attribute.put(a[0],Long.parseLong(a[1])));
        long roomId = attribute.get("roomId"); // room이 존재하는지 확인
        long memberId = attribute.get("memberId");

        // 챗룸 생성 및 세션 정보 넣기, 챗룸이 있을경우 세션정보만
        // service로 로직 옴겨주기
        MemberDto.Response member = roomMapper.memberToMemberResponse(memberRepository.findById(memberId).get());

        ChatMember chatMember = ChatMember.builder().member(member).session(session).build();

        if(chatRooms.containsKey(roomId)){
            chatRooms.get(roomId).setMembers(chatMember);
        }else {
            ChatRoom chatRoom = new ChatRoom(roomId);
            chatRoom.setMembers(chatMember);
            chatRooms.put(roomId, chatRoom);
        }


        // db에서 과거 메시지들 찾아서 불러오기
        // roomId를 이용해서 모든 메세지들 가저오기
        List<Message> messages = messageRepository.findAllByRoomOrderByMessageIdAsc(new Room(roomId));

        // 모든 메세지들 + 작성자의 정보를 response dto로 변환 (맵퍼생성하기)
        List<MessageDto.Response> responses = messages.stream().map(
                m-> MessageDto.Response.builder()
                            .createdAt(m.getCreatedAt())
                            .payload(m.getPayload())
                            .roomId(roomId)
                            .member(roomMapper.memberToMemberResponse(m.getMember()))
                            .isMine(memberId==m.getMember().getMemberId())
                            .build()
        ).collect(Collectors.toList());

        // 모든메세지들을 자신의 세션에 메세지 전송
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

        ChatRoom room = chatService.findRoomById(chatMessage.getRoomId());
        //

        room.handleActions(session, chatMessage, chatService);
    }

    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
        // WebSocket 연결이 닫히면 사용자를 채팅 방에서 제거
        String roomId = session.getUri().getQuery();
        String participantId = session.getId();
//        chatRoomService.removeParticipant(roomId, participantId);
        log.info("사용자 '{}'가 채팅 방 '{}'에서 나갔습니다.", participantId, roomId);
    }
}















