package com.shellwe.server.exception.customexception;

import com.shellwe.server.exception.exceptioncode.TradeExceptionCode;
import lombok.Getter;

@Getter
public class TradeLogicException extends RuntimeException {

    private TradeExceptionCode tradeExceptionCode;

    public TradeLogicException(TradeExceptionCode tradeExceptionCode) {
        super(tradeExceptionCode.getMessage());
        this.tradeExceptionCode = tradeExceptionCode;
    }
}
