package com.shellwe.server.domain.shell.service;

import com.shellwe.server.domain.category.entity.Category;
import com.shellwe.server.domain.category.service.CategoryService;
import com.shellwe.server.domain.member.entity.Member;
import com.shellwe.server.domain.member.service.MemberService;
import com.shellwe.server.domain.shell.dto.request.RegisterRequestDto;
import com.shellwe.server.domain.shell.dto.request.UpdateRequestDto;
import com.shellwe.server.domain.shell.dto.response.*;
import com.shellwe.server.domain.shell.entity.Shell;
import com.shellwe.server.domain.shell.mapper.ShellMapper;
import com.shellwe.server.domain.shell.repository.ShellRepository;
import com.shellwe.server.domain.types.ShellType;
import com.shellwe.server.domain.types.category.ShellCategory;
import com.shellwe.server.file.UploadPictureService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;

@Slf4j
@Transactional
@Service
public class ShellService {

    private final ShellRepository shellRepository;
    private final MemberService memberService;
    private final CategoryService categoryService;
    private final UploadPictureService uploadPictureService;
    private final ShellMapper shellMapper;

    @Autowired
    public ShellService(ShellRepository shellRepository, MemberService memberService,
                        CategoryService categoryService, ShellMapper shellMapper, UploadPictureService uploadPictureService) {
        this.shellRepository = shellRepository;
        this.memberService = memberService;
        this.categoryService = categoryService;
        this.shellMapper = shellMapper;
        this.uploadPictureService = uploadPictureService;
    }

    public ShellIdDto register(RegisterRequestDto registerRequestDto, long memberId, List<MultipartFile> pictures) {
        Shell registerShell = shellMapper.registerRequestDtoToShell(registerRequestDto);
        List<String> pictureUrls = uploadPictureService.severalPictureFilesToUrls(pictures);
        Category category = categoryService.findOrCreate(registerRequestDto.getCategory());

        registerShell.statusActive();
        registerShell.setMember(memberService.getMemberByOtherLayer(memberId));
        registerShell.setPictureUrls(pictureUrls);
        registerShell.setCategory(category);

        ShellIdDto shellIdDto = new ShellIdDto();
        shellIdDto.setId(shellRepository.save(registerShell).getId());
        return shellIdDto;
    }

    @Transactional(readOnly = true)
    public FindDetailsResponseDto findDetails(Long shellId, Long memberId) {
        Shell shell = findById(shellId);
        FindDetailsResponseDto findDetailsResponseDto = shellMapper.shellToFindDetailsResponseDto(shell);
        findDetailsResponseDto.getMember().setMe(false);

        if (shell.getMember().getId().equals(memberId)) {
            findDetailsResponseDto.getMember().setMe(true);
        }
        return findDetailsResponseDto;
    }

    public ShellIdDto update(long shellId, UpdateRequestDto updateRequestDto, long memberId, List<MultipartFile> pictures) {
        ShellIdDto shellIdDto = new ShellIdDto();
        Shell shell = findById(shellId);
        Member member = shell.getMember();

        if (member.getId() == memberId) {
            Shell requestShell = shellMapper.updateRequestDtoToShell(updateRequestDto);
            shell.updateShellInformExceptPictureUrl(requestShell);
            List<String> shellPicturesUrl = uploadPictureService.severalPictureFilesToUrls(pictures);
            shell.deleteAllPictureUrls();
            shell.setPictureUrls(shellPicturesUrl);
            shellIdDto.setId(shellRepository.save(shell).getId());
        } else {
            throw new IllegalStateException("자신의 아이디만 수정 가능합니다.");
        }
        return shellIdDto;
    }

    public void delete(long shellId, long memberId) {
        Shell shell = findById(shellId);

        if (shell.getMember().getId() == memberId) {
            shellRepository.delete(shell);
        } else {
            throw new IllegalStateException("자신의 아이디만 삭제 가능합니다.");
        }
    }

    @Transactional(readOnly = true)
    public InquiryResponseDto inquiry(int limit, Long cursor, ShellType shellType, ShellCategory shellCategory) {
        Pageable pageable = PageRequest.of(0, limit);
        List<Shell> shells = shellRepository.findShells(cursor, shellType, shellCategory, pageable);
        InquiryResponseDto inquiryResponseDto = new InquiryResponseDto();

        List<ShellResponseDto> shellsDto = shellMapper.shellsToInquiryResponseDto(shells);
        inquiryResponseDto.setShells(shellsDto);
        return inquiryResponseDto;
    }

    @Transactional(readOnly = true)
    public SearchResponseDto search(int limit, Long cursor, String title) {
        Pageable pageable = PageRequest.of(0, limit);
        List<Shell> shells = shellRepository.searchShells("%" + title + "%", cursor, pageable);
        SearchResponseDto searchResponseDto = new SearchResponseDto();
        List<ShellResponseDto> shellsDto = shellMapper.shellsToInquiryResponseDto(shells);
        searchResponseDto.setShells(shellsDto);
        return searchResponseDto;
    }

    @Transactional(readOnly = true)
    public Shell getShellByOtherLayer(long shellId) {
        return findById(shellId);
    }

    @Transactional(readOnly = true)
    public List<Shell> getShellsByOtherLayer(List<Long> shellIds) {
        return shellRepository.findAllById(shellIds);
    }

    private Shell findById(long shellId) {
        Optional<Shell> byId = shellRepository.findById(shellId);
        return byId.orElseThrow(() -> new IllegalStateException());
    }
}
