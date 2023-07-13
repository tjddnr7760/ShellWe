package com.shellwe.server.exception.response;

import lombok.Getter;
import org.springframework.validation.BindingResult;

import java.util.List;
import java.util.stream.Collectors;

@Getter
public class ControllerErrorResponse {

    private List<ControllerErrorResponse.FieldError> fieldErrors;

    private ControllerErrorResponse(List<ControllerErrorResponse.FieldError> fieldErrors) {
        this.fieldErrors = fieldErrors;
    }

    public static ControllerErrorResponse of(BindingResult bindingResult) {
        return new ControllerErrorResponse(ControllerErrorResponse.FieldError.of(bindingResult));
    }

    @Getter
    public static class FieldError {

        private String field;
        private Object rejectedValue;
        private String reason;

        private FieldError(String field, Object rejectedValue, String reason) {
            this.field = field;
            this.rejectedValue = rejectedValue;
            this.reason = reason;
        }

        public static List<ControllerErrorResponse.FieldError> of(BindingResult bindingResult) {
            final List<org.springframework.validation.FieldError> fieldErrors =
                    bindingResult.getFieldErrors();
            return fieldErrors.stream()
                    .map(error -> new ControllerErrorResponse.FieldError(
                            error.getField(),
                            error.getRejectedValue() == null ?
                                    "" : error.getRejectedValue().toString(),
                            error.getDefaultMessage()))
                    .collect(Collectors.toList());
        }
    }
}
