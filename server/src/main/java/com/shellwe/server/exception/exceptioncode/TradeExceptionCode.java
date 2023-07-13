package com.shellwe.server.exception.exceptioncode;

import lombok.Getter;

@Getter
public enum TradeExceptionCode {

    TRADE_FAILED(400, "Trade Failed, Check parameter"),
    TRADE_NOT_MY_ID(400, "Trade Id Error");

    private int status;

    private String message;

    TradeExceptionCode(int status, String message) {
        this.status = status;
        this.message = message;
    }
}
