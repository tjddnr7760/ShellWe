package com.shellwe.server.domain.member;

import com.shellwe.server.domain.shell.Shell;
import com.shellwe.server.utils.TimeTracker;
import lombok.Getter;

import java.util.List;

@Getter
public class Member extends TimeTracker {

    private Long id;

    private String email;

    private String password;

    private String displayName;

    private List<Shell> shells;
}
