package com.shellwe.server.exception.customexception;

import com.shellwe.server.exception.exceptioncode.AccessTokenExceptionCode;
import lombok.Getter;

@Getter
public class AccessTokenException extends RuntimeException {

    private AccessTokenExceptionCode accessTokenExceptionCode;

    public AccessTokenException(AccessTokenExceptionCode accessTokenExceptionCode) {
        super(accessTokenExceptionCode.getMessage());
        this.accessTokenExceptionCode = accessTokenExceptionCode;
    }
}
