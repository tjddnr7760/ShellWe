package com.shellwe.server.domain.cart.dao;

import com.shellwe.server.domain.cart.domain.Cart;
import com.shellwe.server.domain.member.domain.Member;
import com.shellwe.server.domain.shell.domain.Shell;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface CartRepository extends JpaRepository<Cart, Long> {

    void deleteAllByShellId(long shellId);

    void deleteAllByOwnerId(long memberId);

    List<Cart> findAllByOwnerId(long memberId);

    Optional<Cart> findByOwnerAndShell(Member member, Shell shell);
}
