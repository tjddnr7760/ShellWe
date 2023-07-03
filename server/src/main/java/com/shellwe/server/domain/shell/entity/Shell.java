package com.shellwe.server.domain.shell;

import com.shellwe.server.domain.category.Category;
import com.shellwe.server.domain.member.Member;
import com.shellwe.server.domain.tag.Tag;
import com.shellwe.server.domain.types.ShellType;
import com.shellwe.server.domain.types.Status;
import com.shellwe.server.utils.TimeTracker;
import lombok.Getter;

import java.util.List;

@Getter
public class Shell extends TimeTracker {

    private Long id;

    private ShellType shellType;

    private Status status;

    private String title;

    private String body;

    private Category category;

    private List<Tag> tags;

    private Member member;
}
