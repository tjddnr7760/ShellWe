package com.shellwe.server.domain.shell.dto.request;

import com.shellwe.server.domain.types.Status;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UpdateTradeStatusRequestDto {

    private Status status;
}
