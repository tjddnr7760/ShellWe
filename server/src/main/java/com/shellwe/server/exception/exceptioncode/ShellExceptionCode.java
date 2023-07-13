package com.shellwe.server.exception.exceptioncode;

import lombok.Getter;

@Getter
public enum ShellExceptionCode {

    SHELL_NOT_MY_ID(400, "Shell Id Error");

    private int status;

    private String message;

    ShellExceptionCode(int status, String message) {
        this.status = status;
        this.message = message;
    }
}
