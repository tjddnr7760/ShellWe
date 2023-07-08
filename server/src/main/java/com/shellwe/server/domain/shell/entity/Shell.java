package com.shellwe.server.domain.shell.entity;

import com.shellwe.server.domain.category.entity.Category;
import com.shellwe.server.domain.member.entity.Member;
import com.shellwe.server.domain.picture.entity.Picture;
import com.shellwe.server.domain.tag.entity.Tag;
import com.shellwe.server.domain.types.ShellType;
import com.shellwe.server.domain.types.Status;
import com.shellwe.server.utils.TimeTracker;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

@ToString
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

    private String title;

    private String body;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
    @JoinColumn(name = "CATEGORY_ID")
    private Category category;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "SHELL_ID")
    private List<Tag> tags = new ArrayList<>();

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "SHELL_ID")
    private List<Picture> pictureUrls = new ArrayList<>();

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

    public void setMember(Member member) {
        this.member = member;
        if (!member.getShells().contains(this)) {
            member.getShells().add(this);
        }
    }

    public void setPictureUrls(List<String> pictureUrls) {
        List<Picture> pictures = IntStream.range(0, pictureUrls.size())
                .mapToObj(order -> new Picture(order, pictureUrls.get(order)))
                .collect(Collectors.toList());

        this.pictureUrls = pictures;
    }

    public void addOnePictureUrl(String pictureUrl, int pictureOrder) {
        boolean isOrderExist = this.pictureUrls.stream()
                .anyMatch(picture -> picture.getOrder() == pictureOrder);
        if (isOrderExist) {
            throw new IllegalArgumentException("해당 순서의 사진이 이미 존재합니다.");
        }
        Picture picture = new Picture(pictureOrder, pictureUrl);
        this.pictureUrls.add(picture);
    }

    public void updateShellPictureUrl(String pictureUrl, int pictureOrder) {
        Picture picture = this.getPictureUrls().get(pictureOrder);
        picture.updatePictureUrl(pictureOrder, pictureUrl);
        this.getPictureUrls().set(pictureOrder, picture);
    }

    public void deleteOnePictureUrl(int pictureOrder) {
        Picture deletePicture = this.pictureUrls.stream()
                .filter(picture -> picture.getOrder() == pictureOrder)
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("해당 순서의 사진이 존재하지 않습니다."));

        this.pictureUrls.remove(deletePicture);
        for (Picture remainingPicture : this.pictureUrls) {
            if (remainingPicture.getOrder() > pictureOrder) {
                remainingPicture.minusOrder();
            }
        }
    }

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
        if (requestShell.getTags() != null) {
            this.tags = requestShell.getTags();
        }
    }
}
