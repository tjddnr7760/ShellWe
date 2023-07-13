package com.shellwe.server.exception.handler;

import com.nimbusds.oauth2.sdk.ErrorResponse;
import com.shellwe.server.exception.response.ControllerErrorResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@Slf4j
@RestControllerAdvice
public class ControllerExceptionHandler {

    @ExceptionHandler
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ControllerErrorResponse handleMethodArgumentNotValidException(
            MethodArgumentNotValidException e) {
        log.error("예외 발생 : ", e);
        return ControllerErrorResponse.of(e.getBindingResult());
    }
}
