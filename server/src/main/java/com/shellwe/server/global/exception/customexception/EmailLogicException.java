package com.shellwe.server.global.exception.customexception;

import com.shellwe.server.global.exception.exceptioncode.EmailExceptionCode;
import lombok.Getter;

@Getter
public class EmailLogicException extends RuntimeException {

    private EmailExceptionCode emailExceptionCode;

    public EmailLogicException(EmailExceptionCode emailExceptionCode) {
        super(emailExceptionCode.getMessage());
        this.emailExceptionCode = emailExceptionCode;
    }
}
