package com.shellwe.websocket.dto;

import lombok.Builder;
import lombok.Getter;

import javax.persistence.Column;

public class MemberDto {
    @Builder
    @Getter
    public static class Response{
        private long id;
        private String displayName;
        private String profileUrl;
    }
}
