package com.shellwe.server.domain.photo.entity;

import com.shellwe.server.domain.member.entity.Member;
import com.shellwe.server.domain.shell.entity.Shell;
import lombok.Getter;

import javax.persistence.*;

@Getter
@Table(name = "PHOTO")
@Entity
public class Photo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "PHOTO_ID")
    private Long id;

    private String url;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "MEMBER_ID")
    private Member owner;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "SHELL_ID")
    private Shell shell;
}
