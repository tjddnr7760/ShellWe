package com.shellwe.server.domain.member.dto.request;

import lombok.Getter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

@Getter
public class SignUpRequest {

    @NotBlank
    @Email(message = "Incorrect Email Form")
    private String email;

    private Boolean emailVerificationStatus = false;

    @NotBlank
    @Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d).{8,}$",
            message = "Must contain at least 8 characters, including letters, numbers.")
    private String password;

    @NotBlank
    @Size(min = 1, max = 10, message = "The displayname size must be greater than 0 and less than 10.")
    private String displayName;
}
