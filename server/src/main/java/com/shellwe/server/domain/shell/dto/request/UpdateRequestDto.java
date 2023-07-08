package com.shellwe.server.domain.shell.dto.request;

import com.shellwe.server.domain.tag.entity.Tag;
import com.shellwe.server.domain.types.ShellType;
import com.shellwe.server.domain.types.category.ShellCategory;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@ToString
@Getter
@Setter
public class UpdateRequestDto {

    private String title;

    private String body;

    private ShellType type;

    private ShellCategory category;

    private List<String> tags;

    private int pictureOrder;

    private MultipartFile pictureFile;
}
