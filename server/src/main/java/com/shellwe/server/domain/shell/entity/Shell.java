package com.shellwe.server.domain.shell.entity;

import com.shellwe.server.domain.category.entity.Category;
import com.shellwe.server.domain.member.entity.Member;
import com.shellwe.server.domain.tag.entity.Tag;
import com.shellwe.server.domain.types.ShellType;
import com.shellwe.server.domain.types.Status;
import com.shellwe.server.utils.TimeTracker;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Table(name = "SHELL")
@Entity
public class Shell extends TimeTracker {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "SHELL_ID")
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column(name = "SHELL_TYPE")
    private ShellType shellType;

    @Enumerated(EnumType.STRING)
    @Column(name = "STATUS")
    private Status status;

    private String title;

    private String body;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "CATEGORY_ID")
    private Category category;

    @OneToMany
    @JoinColumn(name = "SHELL_ID")
    private List<Tag> tags = new ArrayList<>();

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    public void setMember(Member member) {
        this.member = member;
        if (!member.getShells().contains(this)) {
            member.getShells().add(this);
        }
    }
}
