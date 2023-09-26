package com.shellwe.server.domain.trade.dto.response;

import com.shellwe.server.domain.shell.dto.response.ShellResponseDto;
import lombok.Getter;

import java.util.List;

@Getter
public class MyTradeResponseDto {

    List<ShellResponseDto> shells;
}
