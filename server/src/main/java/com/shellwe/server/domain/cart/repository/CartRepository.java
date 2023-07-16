package com.shellwe.server.domain.cart.repository;

import com.shellwe.server.domain.cart.entity.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CartRepository extends JpaRepository<Cart, Long> {

    void deleteAllByShellId(long shellId);

    void deleteAllByOwnerId(long memberId);

    List<Cart> findAllByOwnerId(long memberId);
}
