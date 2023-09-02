package com.shellwe.server.domain.member.api;

import com.shellwe.server.global.auth.memberDetails.MemberContextInform;
import com.shellwe.server.domain.member.dto.response.GetMyShellListDto;
import com.shellwe.server.domain.member.dto.response.GetMyShellListDtoTags;
import com.shellwe.server.domain.member.application.MemberService;
import com.shellwe.server.global.types.Status;
import com.shellwe.server.global.exception.customexception.AccessTokenException;
import com.shellwe.server.global.exception.exceptioncode.AccessTokenExceptionCode;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RequestMapping("/myshell")
@RestController
public class MyShellApi {

    private final MemberService memberService;

    @Autowired
    public MyShellApi(MemberService memberService) {
        this.memberService = memberService;
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/{memberId}/myshells")
    public GetMyShellListDto getMyShellList(@PathVariable long memberId,
                                            @RequestParam(value = "status") String status,
                                            Authentication authentication) {
        return memberService.myShellList(memberId, Status.valueOf(status.toUpperCase()), getId(authentication));
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/{memberId}/shells")
    public GetMyShellListDtoTags getShellListNotAuthentication(@PathVariable long memberId,
                                                               @RequestParam(value = "status") String status) {
        return memberService.myShellListUnAuthentication(memberId, Status.valueOf(status.toUpperCase()));
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
}
