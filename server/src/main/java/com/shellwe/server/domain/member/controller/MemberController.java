package com.shellwe.server.domain.member.controller;

import com.shellwe.server.domain.member.dto.request.DeleteRequestDto;
import com.shellwe.server.domain.member.dto.request.SignUpRequestDto;
import com.shellwe.server.domain.member.dto.request.UpdateRequestDto;
import com.shellwe.server.domain.member.dto.response.FindResponseDto;
import com.shellwe.server.domain.member.service.MemberService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

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
    public void signUpMember(@Valid @RequestBody SignUpRequestDto signUpRequestDto) throws InterruptedException {
        memberService.signUpMember(signUpRequestDto);
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/email/{email}")
    public String verificationMember(@PathVariable String email) throws InterruptedException {
        memberService.verifyEmail(email);
        return "인증이 완료되었습니다. 새롭게 로그인 해주세요";
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/{memberId}")
    public FindResponseDto getMemberById(@PathVariable long memberId, Authentication authentication) {
        FindResponseDto memberById = memberService.findMemberById(getEmail(authentication), memberId);
        return memberById;
    }


    @ResponseStatus(HttpStatus.OK)
    @PatchMapping("/{memberId}")
    public void updateMemberById(@PathVariable long memberId,
                                 @RequestBody UpdateRequestDto updateRequestDto,
                                 Authentication authentication) {
        memberService.updateMember(authentication.getName(), memberId, updateRequestDto);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{memberId}")
    public void deleteMemberByIdAndPassword(@PathVariable long memberId,
                                            @RequestBody DeleteRequestDto deleteRequestDto,
                                            Authentication authentication) {
        memberService.deleteMember(authentication.getName(), memberId, deleteRequestDto);
    }

    private String getEmail(Authentication authentication) {
        String email;
        if (authentication == null) {
            email = null;
        } else {
            email = authentication.getName();
        }
        return email;
    }
}
