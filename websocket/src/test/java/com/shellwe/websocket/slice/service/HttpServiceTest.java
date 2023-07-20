package com.shellwe.websocket.slice.service;

import com.shellwe.websocket.auth.authority.EmailVerifiedAuthority;
import com.shellwe.websocket.auth.memberDetails.MemberContextInform;
import com.shellwe.websocket.customAnnotation.WithMockCustomUser;
import com.shellwe.websocket.dto.MemberDto;
import com.shellwe.websocket.dto.ResponseDto;
import com.shellwe.websocket.dto.RoomDto;
import com.shellwe.websocket.entity.Member;
import com.shellwe.websocket.entity.MemberRoom;
import com.shellwe.websocket.entity.Message;
import com.shellwe.websocket.entity.Room;
import com.shellwe.websocket.mapper.RoomMapper;
import com.shellwe.websocket.repository.MemberRepository;
import com.shellwe.websocket.repository.MemberRoomRepository;
import com.shellwe.websocket.repository.MessageRepository;
import com.shellwe.websocket.repository.RoomRepository;
import com.shellwe.websocket.service.HttpService;
import static org.assertj.core.api.Assertions.*;

import com.shellwe.websocket.service.Service;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import static org.mockito.BDDMockito.*;

import org.junit.jupiter.params.ParameterizedTest;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.util.ReflectionTestUtils;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@ExtendWith(MockitoExtension.class)
public class HttpServiceTest {
    @InjectMocks
    private HttpService httpService;
    @Mock
    private MemberRoomRepository memberRoomRepository;
    @Mock
    private MemberRepository memberRepository;
    @Mock
    private RoomRepository roomRepository;
    @Mock
    private MessageRepository messageRepository;
    @Mock
    private RoomMapper roomMapper;

    @BeforeAll
    public static void init(){
        Long id = 1L;
        String email = "test@gmail.com";
        String displayName = "mockUser";
        String profileUrl = "empty";

        MemberContextInform mockUser =new MemberContextInform(id, email, displayName, profileUrl);

        List<EmailVerifiedAuthority> emailVerifiedAuthorities =
                Collections.singletonList(new EmailVerifiedAuthority(true));

        Authentication authentication = new UsernamePasswordAuthenticationToken(mockUser, null, emailVerifiedAuthorities);
        SecurityContextHolder.getContext().setAuthentication(authentication);
    }

    @Test
    public void findAllRoom() throws NoSuchMethodException, InvocationTargetException, IllegalAccessException {
        MemberRoom memberRoom = new MemberRoom(new Room(1L));

        Message message = new Message();
        message.setPayload("마지막 메세지");

        given(memberRoomRepository.findAllMyRoomsWithSeller(Mockito.anyLong())).willReturn(List.of(memberRoom));
        given(messageRepository.unReadCount(Mockito.anyLong(),Mockito.anyLong())).willReturn(1L);
        given(messageRepository.findFirstByRoomOrderByIdDesc(Mockito.any())).willReturn(message);

        MemberDto.Response member = MemberDto.Response.builder()
                .displayName("홍길동")
                .id(1L)
                .profileUrl("empty")
                .build();
        RoomDto.Response response = RoomDto.Response.builder()
                .id(1L)
                .unread(1L)
                .lastMessage("마지막 메세지")
                .member(member)
                .build();
        given(roomMapper.memberRoomToWsResponse(Mockito.any(),Mockito.anyLong(),Mockito.anyString(),Mockito.any())).willReturn(response);

        assertThat(httpService.findAllRoom()).isEqualTo(List.of(response));
    }

    @Test
    public void createRoomTest(){
        RoomDto.Post requestBody = RoomDto.Post.builder()
                .myShellId(1L)
                .sellerShellId(2L)
                .sellerMemberId(2L)
                .build();

        given(roomRepository.save(Mockito.any())).willReturn(new Room(1L));
        given(memberRepository.findById(Mockito.anyLong())).willReturn(Optional.of(new Member()));

        ResponseDto response = ResponseDto.builder()
                .roomsUrl("http://localhost:8080/chat")
                .roomUrl("ws://localhost:8080/chat?roomId=1")
                .build();

        assertThat(httpService.createRoom(requestBody).getClass()).isEqualTo(response.getClass());
        assertThat(httpService.createRoom(requestBody).getRoomsUrl()).isEqualTo(response.getRoomsUrl());
        assertThat(httpService.createRoom(requestBody).getRoomUrl()).isEqualTo(response.getRoomUrl());

    }
}
