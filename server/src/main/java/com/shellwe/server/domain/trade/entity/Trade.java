package com.shellwe.server.domain.trade.entity;

import com.shellwe.server.domain.member.entity.Member;
import com.shellwe.server.domain.shell.entity.Shell;
import com.shellwe.server.utils.TimeTracker;
import lombok.Getter;

import javax.persistence.*;

@Getter
@Table(name = "TRADE")
@Entity
public class Trade extends TimeTracker {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "TRADE_ID")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "SELLER_ID")
    private Member seller;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "BUYER_SHELL_ID")
    private Shell buyerShell;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "SELLER_SHELL_ID")
    private Shell sellerShell;
}
