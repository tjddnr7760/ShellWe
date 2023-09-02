package com.shellwe.server.global.exception.customexception;

import com.shellwe.server.global.exception.exceptioncode.ShellExceptionCode;
import lombok.Getter;

@Getter
public class ShellLogicException extends RuntimeException {

    private ShellExceptionCode shellExceptionCode;

    public ShellLogicException(ShellExceptionCode shellExceptionCode) {
        super(shellExceptionCode.getMessage());
        this.shellExceptionCode = shellExceptionCode;
    }
}
