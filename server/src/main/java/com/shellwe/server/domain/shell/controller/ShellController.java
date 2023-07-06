package com.shellwe.server.domain.shell.controller;

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

    @PostMapping
    public RegisterResponseDto registerShell(@RequestBody RegisterRequestDto registerRequestDto, Authentication authentication) {

    }

    @GetMapping("/{shellId}")
    public FindDetailsResponseDto findShellDetails(@PathVariable long shellId) {

    }

    @PatchMapping("/{shellId}/update")
    public UpdateResponseDto updateShell(@PathVariable long shellId,
                                         @RequestBody UpdateRequestDto updateRequestDto,
                                         Authentication authentication) {

    }

    @DeleteMapping("/{shellId}")
    public void deleteShell(@PathVariable long shellId, Authentication authentication) {

    }

    @PatchMapping("/{shellId}")
    public UpdateTradeStatusResponseDto updateShellTradeStatus(@PathVariable long shellId,
                                                               @RequestBody UpdateTradeStatusRequestDto updateTradeStatusRequestDto,
                                                               Authentication authentication) {

    }

    @GetMapping("/main")
    public InquiryToMainResponseDto inquiryShellsToMain(@RequestParam("size") int size) {

    }

    @GetMapping("/shells")
    public InquiryResponseDto inquiryShells(@RequestParam("limit") int limit,
                                            @RequestParam("cursor") int cursor,
                                            @RequestParam("type") ShellType shellType,
                                            @RequestParam("category") ShellCategory shellCategory) {

    }

    @GetMapping("/search")
    public SearchResponseDto searchShells(@RequestParam("limit") int limit,
                                          @RequestParam("cursor") int cursor,
                                          @RequestParam("type") ShellType shellType,
                                          @RequestParam("title") String title) {

    }
}
