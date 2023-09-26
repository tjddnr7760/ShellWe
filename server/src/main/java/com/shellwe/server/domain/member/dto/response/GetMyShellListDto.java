package com.shellwe.server.domain.member.dto.response;

import com.shellwe.server.domain.shell.dto.response.ShellResponseDto;
import lombok.Getter;

import java.util.List;

@Getter
public class GetMyShellListDto {

    List<ShellResponseDto> shells;
}
