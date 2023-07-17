package com.shellwe.server.domain.shell.entity;

import com.shellwe.server.domain.category.entity.Category;
import com.shellwe.server.domain.member.entity.Member;
import com.shellwe.server.domain.tag.entity.Tag;
import com.shellwe.server.domain.types.ShellType;
import com.shellwe.server.domain.types.Status;
import com.shellwe.server.domain.types.category.ShellCategory;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

class ShellTest {

    @Test
    void statusActive() {
        // given
        Shell testShell = new Shell();

        // when
        testShell.statusActive();

        // then
        assertThat(testShell.getStatus()).isEqualTo(Status.ACTIVE);
    }

    @Test
    void statusInActive() {
        // given
        Shell testShell = new Shell();

        // when
        testShell.statusInActive();

        // then
        assertThat(testShell.getStatus()).isEqualTo(Status.INACTIVE);
    }

    @Test
    void setStatus() {
        // given
        Shell activeShell = new Shell();
        Shell inactiveShell = new Shell();

        // when
        activeShell.setStatus(Status.ACTIVE);
        inactiveShell.setStatus(Status.INACTIVE);

        // then
        assertThat(activeShell.getStatus()).isEqualTo(Status.ACTIVE);
        assertThat(inactiveShell.getStatus()).isEqualTo(Status.INACTIVE);
    }

    @Test
    void setMember() {
        // given
        Shell testShell = new Shell();
        Member member = new Member();

        // when
        testShell.setMember(member);

        // then
        assertThat(testShell.getMember()).isEqualTo(member);
    }

    @Test
    void setCategory() {
        // given
        Shell testShell = new Shell();
        Category category = new Category((long) 1, ShellCategory.P_ALL);

        // when
        testShell.setCategory(category);

        // then
        assertThat(testShell.getCategory().getShellCategory()).isEqualTo(category.getShellCategory());
    }

    @Test
    void setPictureUrls() {
        // given
        Shell testShell = new Shell();
        List<String> pictureUrls = new ArrayList<>();

        pictureUrls.add("https://sample.image1");
        pictureUrls.add("https://sample.image2");
        pictureUrls.add("https://sample.image3");

        // when
        testShell.setPictureUrls(pictureUrls);

        // then
        assertThat(testShell.getPictureUrls().get(0).getUrl()).isEqualTo(pictureUrls.get(0));
        assertThat(testShell.getPictureUrls().get(1).getUrl()).isEqualTo(pictureUrls.get(1));
        assertThat(testShell.getPictureUrls().get(2).getUrl()).isEqualTo(pictureUrls.get(2));
    }

    @Test
    void deleteAllPictureUrls() {
        // given
        Shell testShell = new Shell();
        List<String> pictureUrls = new ArrayList<>();

        pictureUrls.add("https://sample.image1");
        pictureUrls.add("https://sample.image2");
        pictureUrls.add("https://sample.image3");

        // when
        testShell.setPictureUrls(pictureUrls);
        testShell.deleteAllPictureUrls();

        // then
        assertThatThrownBy(() -> testShell.getPictureUrls().get(0))
                .isInstanceOf(IndexOutOfBoundsException.class);
    }

    @Test
    void updateShellInformExceptPictureUrl() {
        // given
        Shell testShell1 = new Shell();

        List<Tag> tags = new ArrayList<>();
        tags.add(new Tag((long) 1, "laptop"));
        tags.add(new Tag((long) 2, "phone"));

        Shell requestShell = Shell.builder()
                .title("test title")
                .body("test body")
                .shellType(ShellType.PRODUCT)
                .category(new Category((long) 1, ShellCategory.P_ALL))
                .tags(tags)
                .build();

        // when
        testShell1.updateShellInformExceptPictureUrl(requestShell);

        // then
        assertThat(testShell1.getTitle()).isEqualTo("test title");
        assertThat(testShell1.getBody()).isEqualTo("test body");
        assertThat(testShell1.getShellType()).isEqualTo(ShellType.PRODUCT);
        assertThat(testShell1.getCategory().getShellCategory()).isEqualTo(ShellCategory.P_ALL);
        assertThat(testShell1.getTags().get(0).getTagName()).isEqualTo("laptop");
    }
}