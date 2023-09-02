package com.shellwe.server.global.exception.customexception;

import com.shellwe.server.global.exception.exceptioncode.AccessTokenExceptionCode;
import lombok.Getter;

@Getter
public class AccessTokenException extends RuntimeException {

    private AccessTokenExceptionCode accessTokenExceptionCode;

    public AccessTokenException(AccessTokenExceptionCode accessTokenExceptionCode) {
        super(accessTokenExceptionCode.getMessage());
        this.accessTokenExceptionCode = accessTokenExceptionCode;
    }
}
