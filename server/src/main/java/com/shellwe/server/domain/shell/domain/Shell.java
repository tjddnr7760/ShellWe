package com.shellwe.server.domain.shell.domain;

import com.shellwe.server.domain.category.domain.Category;
import com.shellwe.server.domain.member.domain.Member;
import com.shellwe.server.global.types.ShellType;
import com.shellwe.server.global.types.Status;
import com.shellwe.server.global.utils.TimeTracker;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.Size;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Builder
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

    @Column(name = "TITLE", length = 60)
    @Size(max = 30)
    private String title;

    @Column(name = "BODY", columnDefinition = "TEXT")
    @Size(max = 1500)
    private String body;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
    @JoinColumn(name = "CATEGORY_ID")
    private Category category;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    public void statusActive() {
        this.status = Status.ACTIVE;
    }

    public void statusInActive() {
        this.status = Status.INACTIVE;
    }

    public void setStatus(Status status) {
        this.status = status;
    }


    public void setCategory(Category category) {
        this.category = category;
    }

//    public void setPictureUrls(List<String> pictureUrls) {
//        List<Picture> pictures = IntStream.range(0, pictureUrls.size())
//                .mapToObj(order -> new Picture(order, pictureUrls.get(order)))
//                .collect(Collectors.toList());
//
//        this.pictureUrls = pictures;
//    }
//
//    public void deleteAllPictureUrls() {
//        this.pictureUrls.clear();
//    }
//
//    public void deleteAllTags() {
//        this.tags.clear();
//    }

    public void updateShellInformExceptPictureUrl(Shell requestShell) {
        if (requestShell.getTitle() != null) {
            this.title = requestShell.getTitle();
        }
        if (requestShell.getBody() != null) {
            this.body = requestShell.getBody();
        }
        if (requestShell.getShellType() != null) {
            this.shellType = requestShell.getShellType();
        }
        if (requestShell.getCategory() != null) {
            this.category = requestShell.getCategory();
        }
//        if (requestShell.getTags() != null) {
//            this.tags = requestShell.getTags();
//        }
    }
}
