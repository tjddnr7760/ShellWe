package com.shellwe.server.domain.member.mapper;

import com.shellwe.server.domain.member.dto.request.SignUpRequestDto;
import com.shellwe.server.domain.member.dto.request.UpdateRequestDto;
import com.shellwe.server.domain.member.dto.response.FindResponseDto;
import com.shellwe.server.domain.member.entity.Member;
import com.shellwe.server.domain.picture.dto.PictureResponseDto;
import com.shellwe.server.domain.picture.entity.Picture;
import com.shellwe.server.domain.shell.dto.response.ShellResponseDto;
import com.shellwe.server.domain.shell.entity.Shell;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface MemberMapper {

    Member signUpRequestDtoToMember(SignUpRequestDto signUpRequestDto);

    Member updateRequestDtoToMember(UpdateRequestDto updateRequestDto);

    FindResponseDto memberToFindResponseDto(Member member);

    List<ShellResponseDto> shellListToGetMyShellListDto(List<Shell> activeShellList);

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
