package com.shellwe.websocket.dto;

import lombok.Builder;
import lombok.Getter;

public class MemberDto {
    @Builder
    @Getter
    public static class Response{
        private long memberId;
        private String displayName;
        private String picture;
    }
}
