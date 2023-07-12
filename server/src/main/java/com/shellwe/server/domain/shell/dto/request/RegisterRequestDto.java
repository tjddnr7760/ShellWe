package com.shellwe.server.domain.shell.dto.request;

import com.shellwe.server.domain.types.ShellType;
import com.shellwe.server.domain.types.category.ShellCategory;
import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Getter
@Setter
public class RegisterRequestDto {

    private ShellType type;

    private String title;

    private String body;

    private ShellCategory category;

    private List<String> tags;

    private List<MultipartFile> picturesFile;
}
