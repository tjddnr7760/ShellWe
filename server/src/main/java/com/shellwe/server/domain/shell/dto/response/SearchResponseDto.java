package com.shellwe.server.domain.shell.dto.response;

import lombok.Getter;

import java.util.List;

@Getter
public class SearchResponseDto {

    private List<ShellResponseDto> shells;
}
