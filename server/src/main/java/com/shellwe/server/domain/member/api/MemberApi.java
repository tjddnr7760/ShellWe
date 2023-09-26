package com.shellwe.server.domain.member.api;

import com.shellwe.server.domain.member.dto.request.SignUpRequest;
import com.shellwe.server.domain.member.dto.request.UpdateRequest;
import com.shellwe.server.global.auth.memberDetails.MemberContextInform;
import com.shellwe.server.domain.member.dto.request.DeleteRequest;
import com.shellwe.server.domain.member.dto.response.FindResponseDtoIncludeOauth;
import com.shellwe.server.domain.member.application.MemberService;
import com.shellwe.server.global.exception.customexception.AccessTokenException;
import com.shellwe.server.global.exception.exceptioncode.AccessTokenExceptionCode;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.io.IOException;

@Slf4j
@RequestMapping("/members")
@RestController
public class MemberApi {

    private final MemberService memberService;

    @Value("${redirect.email-verification-success-url}")
    private String emailRedirectUrl;

    @Autowired
    public MemberApi(MemberService memberService) {
        this.memberService = memberService;
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping
    public void signUpMember(@Valid @RequestBody SignUpRequest signUpRequest) throws InterruptedException {
        memberService.signUpMember(signUpRequest);
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/email/{email}")
    public void verificationMember(@PathVariable String email, HttpServletResponse response) throws IOException {
        memberService.verifyEmail(email);
        response.sendRedirect(emailRedirectUrl);
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/{memberId}")
    public FindResponseDtoIncludeOauth getMemberById(@PathVariable long memberId, Authentication authentication) {
        return memberService.findMemberById(getIdAllowNull(authentication), memberId);
    }

    @ResponseStatus(HttpStatus.OK)
    @PatchMapping("/{memberId}")
    public void updateMemberById(@PathVariable long memberId,
                                 @Valid @RequestPart(value = "update") UpdateRequest updateRequest,
                                 @RequestPart(value = "picture", required = false) MultipartFile picture,
                                 Authentication authentication) {
        memberService.updateMember(getId(authentication), memberId, updateRequest, picture);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{memberId}")
    public void deleteMemberByIdAndPassword(@PathVariable long memberId,
                                            @RequestBody DeleteRequest deleteRequest,
                                            Authentication authentication) {
        memberService.deleteMember(getId(authentication), memberId, deleteRequest);
    }

    private Long getId(Authentication authentication) {
        Long id;
        if (authentication == null) {
            throw new AccessTokenException(AccessTokenExceptionCode.TOKEN_EXPIRED);
        } else {
            MemberContextInform memberInform = (MemberContextInform) authentication.getPrincipal();
            id = memberInform.getId();
        }
        return id;
    }

    private Long getIdAllowNull(Authentication authentication) {
        Long id;
        if (authentication == null) {
            id = null;
        } else {
            MemberContextInform memberInform = (MemberContextInform) authentication.getPrincipal();
            id = memberInform.getId();
        }
        return id;
    }
}
