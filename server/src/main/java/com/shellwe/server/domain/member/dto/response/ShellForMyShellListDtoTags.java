package com.shellwe.server.domain.member.dto.response;

import com.shellwe.server.domain.tag.dto.TagResponseDto;
import com.shellwe.server.global.types.ShellType;
import com.shellwe.server.global.types.Status;
import com.shellwe.server.global.types.category.ShellCategory;
import lombok.Getter;

import java.util.List;

@Getter
public class ShellForMyShellListDtoTags {

    private Long id;

    private ShellType type;

    private Status status;

    private String title;

    private String createdAt;

    private ShellCategory category;

    private List<TagResponseDto> tags;

    private String picture;

    private MemberDtoExceptIsMe member;
}
