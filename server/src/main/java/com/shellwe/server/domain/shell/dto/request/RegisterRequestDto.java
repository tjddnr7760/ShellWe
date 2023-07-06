package com.shellwe.server.domain.shell.dto.request;

import com.shellwe.server.domain.types.ShellType;
import com.shellwe.server.domain.types.category.ShellCategory;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class RegisterRequestDto {

    private String title;

    private String body;

    private ShellType type;

    private ShellCategory category;

    private List<String> tags;

    private String profileUrl;
}
