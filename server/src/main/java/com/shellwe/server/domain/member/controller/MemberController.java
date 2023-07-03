package com.shellwe.server.domain.member.controller;

import com.shellwe.server.domain.member.dto.request.DeleteRequestDto;
import com.shellwe.server.domain.member.dto.request.SignUpRequestDto;
import com.shellwe.server.domain.member.dto.request.UpdateRequestDto;
import com.shellwe.server.domain.member.dto.response.FindResponseDto;
import com.shellwe.server.domain.member.service.MemberService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RequestMapping("/members")
@RestController
public class MemberController {

    private final MemberService memberService;

    @Autowired
    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping
    public void signUpMember(@RequestBody SignUpRequestDto signUpRequestDto) {
        memberService.signUpMember(signUpRequestDto);
    }

//    @ResponseStatus(HttpStatus.OK)
//    @GetMapping("/{memberId}")
//    public FindResponseDto getMyMemberById(Authentication authentication,
//                                           @PathVariable long memberId) {
//        FindResponseDto memberById = memberService.findMemberById(memberId);
//        return memberById;
//    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/{memberId}")
    public FindResponseDto getOtherMemberById(@PathVariable long memberId) {
        FindResponseDto memberById = memberService.findMemberById(memberId);
        return memberById;
    }

    @ResponseStatus(HttpStatus.OK)
    @PatchMapping("/{memberId}")
    public void updateMemberById(@PathVariable long memberId,
                                 @RequestBody UpdateRequestDto updateRequestDto) {
        memberService.updateMember("email", memberId, updateRequestDto);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{memberId}")
    public void deleteMemberByIdAndPassword(@PathVariable long memberId,
                                            @RequestBody DeleteRequestDto deleteRequestDto) {
        memberService.deleteMember("email", memberId, deleteRequestDto);
    }
}
