package com.shellwe.server.domain.trade.dto.response;

import com.shellwe.server.domain.shell.dto.response.ShellResponseDto;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class MyTradeResponseDto {

    List<ShellResponseDto> shells;
}
