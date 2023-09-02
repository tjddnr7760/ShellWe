package com.shellwe.server.global.exception.exceptioncode;

import lombok.Getter;

@Getter
public enum AccessTokenExceptionCode {

    TOKEN_EXPIRED(400, "Token Expired, Check Your Token");

    private int status;

    private String message;

    AccessTokenExceptionCode(int status, String message) {
        this.status = status;
        this.message = message;
    }
}
