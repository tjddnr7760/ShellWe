package com.shellwe.server.domain.shell.dto.response;

import com.shellwe.server.domain.member.dto.response.FindResponseDto;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class ShellResponseDto {

    private Long shellId;

    private int numberOfTrades;

    private String type;

    private String status;

    private String title;

    private String createdAt;

    private String modifiedAt;

    private String category;

    private List<String> tags;

    private List<String> shellPhotos;

    private FindResponseDto member;
}
