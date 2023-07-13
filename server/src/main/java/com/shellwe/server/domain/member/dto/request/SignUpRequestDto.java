package com.shellwe.server.domain.member.dto.request;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

@Getter
@Setter
public class SignUpRequestDto {

    @NotBlank
    @Email
    private String email;

    private Boolean emailVerificationStatus = false;

    @NotBlank
    @Pattern(regexp = "^(?=.*[a-zA-Z])(?=.*\\d)(?=.*[!@#$%&*])[a-zA-Z\\d!@#$%&*]{8,}$",
            message = "Must contain at least 8 characters, including lowercase letters, numbers, and special symbols.")
    private String password;

    @NotBlank
    @Size(min = 1, max = 8, message = "The displayname size must be greater than 0 and less than 8.")
    private String displayName;
}
