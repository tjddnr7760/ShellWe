package com.shellwe.server.domain.member.dto.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SignUpRequestDto {

    private String email;

    private String password;

    private String displayName;

    // 이미지 필드 현재단계 제외
}
