package com.shellwe.server.domain.photo;

import com.shellwe.server.domain.member.Member;
import com.shellwe.server.domain.shell.Shell;
import lombok.Getter;

@Getter
public class Photo {

    private Long id;

    private String url;

    private Member owner;

    private Shell shell;
}
