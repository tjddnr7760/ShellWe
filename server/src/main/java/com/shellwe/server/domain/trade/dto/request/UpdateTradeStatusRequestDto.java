package com.shellwe.server.domain.trade.dto.request;

import com.shellwe.server.global.types.Status;
import lombok.Getter;

@Getter
public class UpdateTradeStatusRequestDto {

    private Status status;
}
