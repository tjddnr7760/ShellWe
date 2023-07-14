package com.shellwe.websocket.slice.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.shellwe.websocket.controller.ChatController;
import com.shellwe.websocket.customAnnotation.WithMockCustomUser;
import com.shellwe.websocket.dto.ResponseDto;
import com.shellwe.websocket.dto.RoomDto;
import com.shellwe.websocket.service.HttpService;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.jpa.mapping.JpaMetamodelMappingContext;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.*;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.mockito.BDDMockito.given;

@WebMvcTest(ChatController.class)
@MockBean(JpaMetamodelMappingContext.class)
@AutoConfigureRestDocs
public class ChatControllerTest {
    @Autowired
    private MockMvc mockMvc;
    @MockBean
    private HttpService httpService;
    @Autowired
    private ObjectMapper objectMapper;

    @Test
    @WithMockCustomUser
    void getRoomTest() throws Exception {
        given(httpService.findAllRoom()).willReturn(List.of(RoomDto.Response.builder().build()));

        ResultActions actions = mockMvc.perform(
                get("/chat")
        );

        actions.andExpect(status().isOk());
    }

    @Test
    @WithMockCustomUser
    void deleteRoomTest() throws Exception {
        ResultActions actions = mockMvc.perform(
                delete("/chat/{roomId}",1L)
                        .with(SecurityMockMvcRequestPostProcessors.csrf())
        );

        actions.andExpect(status().isNoContent());
    }

    @Test
    @WithMockCustomUser
    void createRoomTest() throws Exception {
        String content = objectMapper.writeValueAsString(RoomDto.Post.builder().build());

        given(httpService.createRoom(Mockito.any())).willReturn(ResponseDto.builder().build());

        ResultActions actions = mockMvc.perform(
                post("/chat")
                        .with(SecurityMockMvcRequestPostProcessors.csrf())
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(content)
        );

        actions.andExpect(status().isCreated());
    }

}
