package com.shellwe.server.global.exception.customexception;

import com.shellwe.server.global.exception.exceptioncode.CartExceptionCode;
import lombok.Getter;

@Getter
public class CartLogicException extends RuntimeException {

    private CartExceptionCode cartExceptionCode;

    public CartLogicException(CartExceptionCode cartExceptionCode) {
        super(cartExceptionCode.getMessage());
        this.cartExceptionCode = cartExceptionCode;
    }
}

