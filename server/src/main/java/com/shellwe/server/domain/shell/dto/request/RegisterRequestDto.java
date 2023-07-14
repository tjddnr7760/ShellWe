package com.shellwe.server.domain.shell.dto.request;

import com.shellwe.server.domain.types.ShellType;
import com.shellwe.server.domain.types.category.ShellCategory;
import com.shellwe.server.utils.customannotation.EachSize;
import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.Size;
import java.util.List;

@Getter
@Setter
public class RegisterRequestDto {

    private ShellType type;

    @Size(max = 10, message = "title within 10 characters")
    private String title;

    @Size(max = 1500, message = "body within 1500 characters")
    private String body;

    private ShellCategory category;

    @EachSize(max = 20)
    private List<String> tags;

    @Size(min = 1, max = 4, message = "number of image files between 1 and 4")
    private List<MultipartFile> picturesFile;
}
