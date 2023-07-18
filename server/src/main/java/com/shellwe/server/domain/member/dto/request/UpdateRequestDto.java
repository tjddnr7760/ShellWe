package com.shellwe.server.domain.member.dto.request;

import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

@Getter
@Setter
public class UpdateRequestDto {

    @Pattern(regexp = "^(?=.*[a-zA-Z])(?=.*\\d)(?=.*[!@#$%&*])[a-zA-Z\\d!@#$%&*]{8,}$")
    private String password;

    @Size(max = 8)
    private String displayName;

    private String introduction;

    private MultipartFile pictureFile;
}
