package com.shellwe.server.domain.shell.controller;

import com.shellwe.server.auth.memberDetails.MemberContextInform;
import com.shellwe.server.domain.shell.dto.request.RegisterRequestDto;
import com.shellwe.server.domain.shell.dto.request.UpdateRequestDto;
import com.shellwe.server.domain.shell.dto.request.UpdateTradeStatusRequestDto;
import com.shellwe.server.domain.shell.dto.response.InquiryResponseDto;
import com.shellwe.server.domain.shell.dto.response.InquiryToMainResponseDto;
import com.shellwe.server.domain.shell.dto.response.SearchResponseDto;
import com.shellwe.server.domain.shell.dto.response.UpdateTradeStatusResponseDto;
import com.shellwe.server.domain.shell.dto.response.FindDetailsResponseDto;
import com.shellwe.server.domain.shell.dto.response.RegisterResponseDto;
import com.shellwe.server.domain.shell.dto.response.UpdateResponseDto;
import com.shellwe.server.domain.shell.service.ShellService;
import com.shellwe.server.domain.types.ShellType;
import com.shellwe.server.domain.types.category.ShellCategory;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RequestMapping("/shells")
@RestController
public class ShellController {

    private final ShellService shellService;

    @Autowired
    public ShellController(ShellService shellService) {
        this.shellService = shellService;
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping
    public RegisterResponseDto registerShell(@RequestBody RegisterRequestDto registerRequestDto, Authentication authentication) {
        return shellService.register(registerRequestDto, getId(authentication));
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/{shellId}")
    public FindDetailsResponseDto findShellDetails(@PathVariable long shellId, Authentication authentication) {
        return shellService.findDetails(shellId, getId(authentication));
    }

    @ResponseStatus(HttpStatus.OK)
    @PatchMapping("/{shellId}/update")
    public UpdateResponseDto updateShell(@PathVariable long shellId,
                                         @RequestBody UpdateRequestDto updateRequestDto,
                                         Authentication authentication) {
        return shellService.update(shellId, updateRequestDto, getId(authentication));
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{shellId}")
    public void deleteShell(@PathVariable long shellId, Authentication authentication) {
        shellService.delete(shellId, getId(authentication));
    }

    @ResponseStatus(HttpStatus.OK)
    @PatchMapping("/{shellId}")
    public UpdateTradeStatusResponseDto updateShellTradeStatus(@PathVariable long shellId,
                                                               @RequestBody UpdateTradeStatusRequestDto updateTradeStatusRequestDto,
                                                               Authentication authentication) {
        return shellService.updateTradeStatus(shellId, updateTradeStatusRequestDto, getId(authentication));
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/main")
    public InquiryToMainResponseDto inquiryShellsToMain(@RequestParam("size") int size) {
        return shellService.inquiryToMain(size);
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/shells")
    public InquiryResponseDto inquiryShells(@RequestParam("limit") int limit,
                                            @RequestParam("cursor") int cursor,
                                            @RequestParam("type") ShellType shellType,
                                            @RequestParam("category") ShellCategory shellCategory) {
        return shellService.inquiry(limit, cursor, shellType, shellCategory);
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/search")
    public SearchResponseDto searchShells(@RequestParam("limit") int limit,
                                          @RequestParam("cursor") int cursor,
                                          @RequestParam("type") ShellType shellType,
                                          @RequestParam("title") String title) {
        return shellService.search(limit, cursor, shellType, title);
    }

    private Long getId(Authentication authentication) {
        Long id;
        if (authentication == null) {
            id = null;
        } else {
            MemberContextInform memberInform = (MemberContextInform) authentication.getPrincipal();
            id = memberInform.getId();
        }
        System.out.println("id = " + id);
        return id;
    }
}
