package com.shellwe.server.domain.shell.service;

import com.shellwe.server.domain.category.service.CategoryService;
import com.shellwe.server.domain.member.service.MemberService;
import com.shellwe.server.domain.shell.mapper.ShellMapper;
import com.shellwe.server.domain.shell.repository.ShellRepository;
import com.shellwe.server.file.service.UploadPictureService;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class ShellServiceTest {

    @InjectMocks
    private ShellService shellService;

    @Mock
    private ShellRepository shellRepository;

    @Mock
    private MemberService memberService;

    @Mock
    private CategoryService categoryService;

    @Mock
    private UploadPictureService uploadPictureService;

    @Mock
    private ShellMapper shellMapper;

    @Test
    void register() {
        // given

        // when

        // then

    }

    @Test
    void findDetails() {
        // given

        // when

        // then

    }

    @Test
    void update() {
        // given

        // when

        // then

    }

    @Test
    void delete() {
        // given

        // when

        // then

    }

    @Test
    void inquiry() {
        // given

        // when

        // then

    }

    @Test
    void search() {
        // given

        // when

        // then

    }

    @Test
    void getShellByOtherLayer() {
        // given

        // when

        // then

    }

    @Test
    void getShellsByOtherLayer() {
        // given

        // when

        // then

    }
}