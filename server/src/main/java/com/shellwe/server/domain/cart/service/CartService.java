package com.shellwe.server.domain.cart.service;

import com.shellwe.server.domain.cart.entity.Cart;
import com.shellwe.server.domain.cart.mapper.CartMapper;
import com.shellwe.server.domain.cart.repository.CartRepository;
import com.shellwe.server.domain.member.dto.response.GetMyShellListDto;
import com.shellwe.server.domain.member.service.MemberService;
import com.shellwe.server.domain.shell.entity.Shell;
import com.shellwe.server.domain.shell.service.ShellService;
import com.shellwe.server.utils.event.MemberRemoveEvent;
import com.shellwe.server.utils.event.ShellRemoveEvent;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@Transactional
@Service
public class CartService {

    private final CartRepository cartRepository;
    private final ShellService shellService;
    private final MemberService memberService;
    private final CartMapper cartMapper;

    public CartService(CartRepository cartRepository, ShellService shellService, MemberService memberService, CartMapper cartMapper) {
        this.cartRepository = cartRepository;
        this.shellService = shellService;
        this.memberService = memberService;
        this.cartMapper = cartMapper;
    }

    public void saveShellInMyCart(long shellId, long memberId) {
        cartRepository.save(
                new Cart(memberService.getMemberByOtherLayer(memberId), shellService.getShellByOtherLayer(shellId))
        );
    }

    public void deleteShellInMyCart(long shellId, Long memberId) {
        if (memberId != null) {
            cartRepository.deleteAllByShellId(shellId);
        }
    }

    @Transactional(readOnly = true)
    public GetMyShellListDto getMyCartShells(long memberId) {
        GetMyShellListDto getMyShellListDto = new GetMyShellListDto();

        List<Cart> carts = cartRepository.findAllByOwnerId(memberId);
        List<Shell> cartShellList = new ArrayList<>();
        for (Cart cart : carts) {
            cartShellList.add(cart.getShell());
        }
        getMyShellListDto.setShells(cartMapper.shellListToGetMyShellListDto(cartShellList));

        return getMyShellListDto;
    }

    @EventListener
    public void handleShellRemoveEvent(ShellRemoveEvent shellRemoveEvent) {
        cartRepository.deleteAllByShellId(shellRemoveEvent.getId());
    }

    @EventListener
    public void handleMemberRemoveEvent(MemberRemoveEvent memberRemoveEvent) {
        cartRepository.deleteAllByOwnerId(memberRemoveEvent.getId());
    }
}
