package com.shellwe.server.domain.trade.dto.response;

import com.shellwe.server.domain.member.dto.response.MemberDtoExceptIsMe;
import com.shellwe.server.domain.picture.dto.PictureResponseDto;
import com.shellwe.server.domain.types.ShellType;
import com.shellwe.server.domain.types.Status;
import com.shellwe.server.domain.types.category.ShellCategory;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class ShellForMyTradeResponseDetails {

    private Long id;

    private ShellType type;

    private Status status;

    private String title;

    private String body;

    private String createdAt;

    private ShellCategory category;

    private List<PictureResponseDto> pictures;

    private MemberDtoExceptIsMe member;
}
