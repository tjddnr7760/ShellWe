package com.shellwe.server.domain.cart.api;

import com.shellwe.server.global.auth.memberDetails.MemberContextInform;
import com.shellwe.server.domain.cart.application.CartService;
import com.shellwe.server.domain.member.dto.response.GetMyShellListDto;
import com.shellwe.server.global.exception.customexception.AccessTokenException;
import com.shellwe.server.global.exception.exceptioncode.AccessTokenExceptionCode;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RequestMapping("/cart")
@RestController
public class CartApi {

    private final CartService cartService;

    @Autowired
    public CartApi(CartService cartService) {
        this.cartService = cartService;
    }

    @ResponseStatus(HttpStatus.OK)
    @PostMapping("/{shellId}")
    public void saveInMyCart(@PathVariable long shellId,
                             Authentication authentication) {
        cartService.saveShellInMyCart(shellId, getId(authentication));
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{shellId}")
    public void deleteInMyCart(@PathVariable long shellId,
                               Authentication authentication) {
        cartService.deleteShellInMyCart(shellId, getId(authentication));
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/myshell/{memberId}")
    public GetMyShellListDto getMyShellList(@PathVariable long memberId) {
        return cartService.getMyCartShells(memberId);
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
