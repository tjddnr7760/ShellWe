package com.shellwe.server.domain.cart.mapper;

import com.shellwe.server.domain.picture.entity.Picture;
import com.shellwe.server.domain.shell.dto.response.ShellResponseDto;
import com.shellwe.server.domain.shell.entity.Shell;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface CartMapper {

    List<ShellResponseDto> shellListToGetMyShellListDto(List<Shell> cartShellList);

    @Mapping(target="picture", expression="java(mapFirstPictureToDto(shell.getPictureUrls()))")
    @Mapping(target="type", source="shell.shellType")
    @Mapping(target="category", source="shell.category.shellCategory")
    ShellResponseDto shellToShellResponseDto(Shell shell);

    default String mapFirstPictureToDto(List<Picture> pictures) {
        if (pictures != null && !pictures.isEmpty()) {
            return pictures.get(0).getUrl();
        }
        return null;
    }
}
