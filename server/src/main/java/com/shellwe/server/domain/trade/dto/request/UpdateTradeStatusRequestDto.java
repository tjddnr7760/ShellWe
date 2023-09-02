package com.shellwe.server.domain.trade.dto.request;

import com.shellwe.server.global.types.Status;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UpdateTradeStatusRequestDto {

    private Status status;
}
