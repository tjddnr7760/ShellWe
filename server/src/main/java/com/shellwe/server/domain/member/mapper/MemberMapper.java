package com.shellwe.server.domain.member.mapper;

import com.shellwe.server.domain.member.dto.request.SignUpRequestDto;
import com.shellwe.server.domain.member.dto.request.UpdateRequestDto;
import com.shellwe.server.domain.member.dto.response.FindResponseDto;
import com.shellwe.server.domain.member.entity.Member;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface MemberMapper {

    Member signUpRequestDtoToMember(SignUpRequestDto signUpRequestDto);

    Member updateRequestDtoToMember(UpdateRequestDto updateRequestDto);

    FindResponseDto memberToFindResponseDto(Member member);
}
