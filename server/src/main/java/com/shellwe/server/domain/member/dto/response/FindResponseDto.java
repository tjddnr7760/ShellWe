package com.shellwe.server.domain.member.dto.response;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class FindResponseDto {

    private boolean isMe;

    private Long memberId;

    private String displayName;

    // 이미지 필드 현재단계 제외
}
