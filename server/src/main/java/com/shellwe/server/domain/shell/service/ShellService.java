package com.shellwe.server.domain.shell.service;

import com.shellwe.server.domain.member.entity.Member;
import com.shellwe.server.domain.member.service.MemberService;
import com.shellwe.server.domain.shell.dto.request.RegisterRequestDto;
import com.shellwe.server.domain.shell.dto.request.UpdateRequestDto;
import com.shellwe.server.domain.shell.dto.request.UpdateTradeStatusRequestDto;
import com.shellwe.server.domain.shell.dto.response.*;
import com.shellwe.server.domain.shell.entity.Shell;
import com.shellwe.server.domain.shell.mapper.ShellMapper;
import com.shellwe.server.domain.shell.repository.ShellRepository;
import com.shellwe.server.File.UploadPictureService;
import com.shellwe.server.domain.types.ShellType;
import com.shellwe.server.domain.types.category.ShellCategory;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;

@Slf4j
@Service
public class ShellService {

    private final ShellRepository shellRepository;
    private final MemberService memberService;
    private final UploadPictureService uploadPictureService;
    private final ShellMapper shellMapper;

    @Autowired
    public ShellService(ShellRepository shellRepository, MemberService memberService,
                        ShellMapper shellMapper, UploadPictureService uploadPictureService) {
        this.shellRepository = shellRepository;
        this.memberService = memberService;
        this.shellMapper = shellMapper;
        this.uploadPictureService = uploadPictureService;
    }

    public RegisterResponseDto register(RegisterRequestDto registerRequestDto, long memberId, List<MultipartFile> pictures) {
        Shell registerShell = shellMapper.registerRequestDtoToShell(registerRequestDto);
        List<String> pictureUrls = uploadPictureService.severalPictureFilesToUrls(pictures);

        registerShell.statusActive();
        registerShell.setMember(memberService.getMemberByOtherLayer(memberId));
        registerShell.setPictureUrls(pictureUrls);

        RegisterResponseDto registerResponseDto = shellMapper.shellToRegisterResponseDto(shellRepository.save(registerShell));
        registerResponseDto.getMember().setMe(true);
        return registerResponseDto;
    }

    public FindDetailsResponseDto findDetails(Long shellId, Long memberId) {
        Shell shell = findById(shellId);
        System.out.println(shell.toString());
        FindDetailsResponseDto findDetailsResponseDto = shellMapper.shellToFindDetailsResponseDto(shell);
        findDetailsResponseDto.getMember().setMe(false);

        if (shell.getMember().getId().equals(memberId)) {
            findDetailsResponseDto.getMember().setMe(true);
        }
        return findDetailsResponseDto;
    }

    public UpdateResponseDto update(long shellId, UpdateRequestDto updateRequestDto, long memberId, MultipartFile picture) {
        System.out.println(updateRequestDto.toString());
        UpdateResponseDto updateResponseDto;
        Shell shell = findById(shellId);
        Member member = shell.getMember();
        int pictureOrder = updateRequestDto.getPictureOrder();

        if (member.getId() == memberId) {
            Shell requestShell = shellMapper.updateRequestDtoToShell(updateRequestDto);
            shell.updateShellInformExceptPictureUrl(requestShell);
            if (pictureOrder >= 0) {
                judgePictureUrl(picture, shell, pictureOrder);
            }
            updateResponseDto = shellMapper.shellToUpdateResponseDto(shellRepository.save(shell));
            updateResponseDto.getMember().setMe(true);
        } else {
            throw new IllegalStateException("자신의 아이디만 수정 가능합니다.");
        }
        return updateResponseDto;
    }

    private void judgePictureUrl(MultipartFile picture, Shell shell, int pictureOrder) {
        if (picture == null || picture.isEmpty()) {
            // 사진 url 삭제
            shell.deleteOnePictureUrl(pictureOrder);
        } else if (pictureOrder == shell.getPictureUrls().size() && pictureOrder < 4) {
            // 사진 url 추가
            String pictureUrl = uploadPictureService.onePictureFileToUrl(picture);
            shell.addOnePictureUrl(pictureUrl, pictureOrder);
        } else if (pictureOrder >= 0 && pictureOrder < shell.getPictureUrls().size()) {
            // 사진 url 변경
            String pictureUrl = uploadPictureService.onePictureFileToUrl(picture);
            shell.updateShellPictureUrl(pictureUrl, pictureOrder);
        } else {
            throw new IllegalArgumentException("사진을 수정할 수 없습니다. 갯수가 초과했거나 옳바른 순서가 아닙니다.");
        }
    }

    public void delete(long shellId, long memberId) {
        Shell shell = findById(shellId);

        if (shell.getMember().getId() == memberId) {
            shellRepository.delete(shell);
        } else {
            throw new IllegalStateException("자신의 아이디만 삭제 가능합니다.");
        }
    }

    public UpdateTradeStatusResponseDto updateTradeStatus(long shellId, UpdateTradeStatusRequestDto updateTradeStatusRequestDto, long memberId) {
        Shell shell = findById(shellId);
        UpdateTradeStatusResponseDto updateTradeStatusResponseDto;

        if (shell.getMember().getId() == memberId) {
            shell.setStatus(updateTradeStatusRequestDto.getStatus());
            updateTradeStatusResponseDto = shellMapper.shellToUpdateTradeStatusResponseDto(shellRepository.save(shell));
            updateTradeStatusResponseDto.getMember().setMe(true);
        } else {
            throw new IllegalStateException("자신의 아이디만 거래상태수정 가능합니다.");
        }
        return updateTradeStatusResponseDto;
    }

//    public InquiryResponseDto inquiry(int limit, int cursor, ShellType shellType, ShellCategory shellCategory) {
//        List<Shell> shells = shellRepository.findShells(cursor, shellType, shellCategory, limit);
//
//        //InquiryResponseDto inquiryResponseDto = getInquiryResponseDto(shells);
//        return shellMapper.shellsToInquiryResponseDto(shells);
//    }
//
//    public SearchResponseDto search(int limit, int cursor, String title) {
//        Pageable pageable = PageRequest.of(0, limit, Sort.by(Sort.Direction.DESC, "id"));
//        List<Shell> shells = shellRepository.searchShells("%" + title + "%", cursor, pageable).getContent();
//        return shellMapper.shellsToSearchResponseDto(shells);
//    }
//
//    private InquiryResponseDto getInquiryResponseDto(List<Shell> shells) {
//        List<ShellResponseDto> shellResponseDtos = shells.stream()
//                .map(shellMapper::shellToShellResponseDto)
//                .collect(Collectors.toList());
//
//        InquiryResponseDto inquiryResponseDto = new InquiryResponseDto();
//        inquiryResponseDto.setShells(shellResponseDtos);
//        return inquiryResponseDto;
//    }
//
//    private SearchResponseDto getSearchResponseDto(List<Shell> shells) {
//        List<ShellResponseDto> shellResponseDtos = shells.stream()
//                .map(shellMapper::shellToShellResponseDto)
//                .collect(Collectors.toList());
//
//        SearchResponseDto searchResponseDto = new SearchResponseDto();
//        searchResponseDto.setShells(shellResponseDtos);
//        return searchResponseDto;
//    }

    private Shell findById(long shellId) {
        Optional<Shell> byId = shellRepository.findById(shellId);
        return byId.orElseThrow(() -> new IllegalStateException());
    }
}
