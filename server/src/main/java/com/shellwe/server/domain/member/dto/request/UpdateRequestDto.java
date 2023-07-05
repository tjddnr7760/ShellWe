package com.shellwe.server.domain.member.dto.request;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

@Getter
@Setter
public class UpdateRequestDto {

    @Pattern(regexp = "^(?=.*[a-zA-Z])(?=.*\\d)(?=.*[!@#$%&*])[a-zA-Z\\d!@#$%&*]{8,}$")
    private String password;

    @Size(max = 8)
    private String displayName;

    // 이미지 필드 현재단계 제외
}
