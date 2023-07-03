package com.shellwe.server.domain.cart.entity;

import com.shellwe.server.domain.member.entity.Member;
import com.shellwe.server.domain.shell.entity.Shell;
import lombok.Getter;

import javax.persistence.*;

@Getter
@Table(name = "CART")
@Entity
public class Cart {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "CART_ID")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "MEMBER_ID")
    private Member owner;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "SHELL_ID")
    private Shell shell;
}
