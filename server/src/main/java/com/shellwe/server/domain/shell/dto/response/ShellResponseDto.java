package com.shellwe.server.domain.shell.dto.response;

import com.shellwe.server.domain.member.dto.response.MemberDtoExceptIsMe;
import com.shellwe.server.global.types.ShellType;
import com.shellwe.server.global.types.Status;
import com.shellwe.server.global.types.category.ShellCategory;
import lombok.Getter;


@Getter
public class ShellResponseDto {

    private Long id;

    private ShellType type;

    private Status status;

    private String title;

    private String createdAt;

    private ShellCategory category;

    private String picture;

    private MemberDtoExceptIsMe member;
}
