package com.shellwe.server.domain.member.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class FindResponseDto {

    @JsonProperty("isMe")
    private boolean isMe;

    private Long memberId;

    private String displayName;

    // 이미지 필드 현재단계 제외

    public void setMeIdName(boolean isMe, Long memberId, String displayName) {
        this.isMe = isMe;
        this.memberId = memberId;
        this.displayName = displayName;
    }
}
