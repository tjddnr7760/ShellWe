package com.shellwe.server.domain.picture.domain;

import com.shellwe.server.domain.shell.domain.Shell;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
public class Picture {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "PICTURE_ID")
    private Long id;

    @Column(name = "PICTURE_ORDER")
    private int order;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "SHELL_ID")
    private Shell shell;

    private String url;

    public Picture(int order, String url) {
        this.order = order;
        this.url = url;
    }
}
