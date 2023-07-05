package com.shellwe.websocket.exception.businessLogicException;

import lombok.Getter;

public enum ExceptionCode {
    MEMBER_NOT_FOUND(404, "Member not found"),
    ROOM_NOT_FOUND(404, "Room not found"),
    MEMBER_ROOM_NOT_FOUND(404, "MemberRoom not found");

    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int code, String message) {
        this.status = code;
        this.message = message;
    }
}
