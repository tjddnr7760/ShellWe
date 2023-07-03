package com.shellwe.server.domain.like.entity;

import com.shellwe.server.domain.member.entity.Member;
import com.shellwe.server.domain.shell.entity.Shell;
import lombok.Getter;

import javax.persistence.*;

@Getter
@Table(name = "LIKE")
@Entity
public class Like {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "LIKE_ID")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "MEMBER_ID")
    private Member owner;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "SHELL_ID")
    private Shell shell;
}
