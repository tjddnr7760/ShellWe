package com.shellwe.server.exception.handler;

import com.shellwe.server.exception.response.RuntimeErrorResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@Slf4j
@RestControllerAdvice
public class RuntimeExceptionHandler {

    @ExceptionHandler
    public RuntimeErrorResponse handleRuntimeException(RuntimeException e) {
        log.error("예외 발생 : ", e);

        RuntimeErrorResponse runtimeErrorResponse = new RuntimeErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR.value(), e.getMessage());

        return runtimeErrorResponse;
    }

}
