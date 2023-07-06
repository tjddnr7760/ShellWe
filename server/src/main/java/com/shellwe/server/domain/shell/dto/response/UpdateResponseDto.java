package com.shellwe.server.domain.shell.dto.response;

import com.shellwe.server.domain.member.dto.response.FindResponseDto;
import com.shellwe.server.domain.types.ShellType;
import com.shellwe.server.domain.types.Status;
import com.shellwe.server.domain.types.category.ShellCategory;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
public class UpdateResponseDto {

    private Long id;

    private ShellType type;

    private String title;

    private List<String> pictures;

    private String body;

    private LocalDateTime createdAt;

    private LocalDateTime modifiedAt;

    private ShellCategory category;

    private List<String> tags;

    private Status status;

    private FindResponseDto member;
}
