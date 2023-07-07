package com.shellwe.server.domain.shell.service;

import com.shellwe.server.domain.shell.dto.request.RegisterRequestDto;
import com.shellwe.server.domain.shell.dto.request.UpdateRequestDto;
import com.shellwe.server.domain.shell.dto.request.UpdateTradeStatusRequestDto;
import com.shellwe.server.domain.shell.dto.response.*;
import com.shellwe.server.domain.shell.mapper.ShellMapper;
import com.shellwe.server.domain.shell.repository.ShellRepository;
import com.shellwe.server.domain.types.ShellType;
import com.shellwe.server.domain.types.category.ShellCategory;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class ShellService {

    private final ShellRepository shellRepository;
    private final ShellMapper shellMapper;

    @Autowired
    public ShellService(ShellRepository shellRepository, ShellMapper shellMapper) {
        this.shellRepository = shellRepository;
        this.shellMapper = shellMapper;
    }

    public RegisterResponseDto register(RegisterRequestDto registerRequestDto, long memberId) {
        // dto를 shell 객체로 변환한다.

        // shell의 정보를 셋팅하고 member를 등록한다.

        // shell을 db에 저장한다.

        // dto로 변환해서 리턴한다.
    }

    public FindDetailsResponseDto findDetails(long shellId, Long memberId) {
        // shellid로 특정 shell을 조회한다.

        // memberId를 비교하고 자기자신이면 isMe를 true로 변경한다. memberId가 null이면 비로그인 정보 조회이다.

        // dto로 바꿔서 리턴한다.
    }

    public UpdateResponseDto update(long shellId, UpdateRequestDto updateRequestDto, long memberId) {
        // shellId로 특정 shell을 조회한다.

        // 유저가 memberId와 동일한지 검증한다.

        // 동일하면 업데이트하고 dto를 리턴한다.
    }

    public void delete(long shellId, long id) {
        // shellId로 특정 shell을 조회한다.

        // 유저가 memberId와 동일한지 검증한다.

        // 동일하면 삭제하고 dto를 리턴한다.
    }

    public UpdateTradeStatusResponseDto updateTradeStatus(long shellId, UpdateTradeStatusRequestDto updateTradeStatusRequestDto, long memberId) {
        // shellId로 특정 shell을 조회한다.

        // 유저가 memberId와 동일한지 검증한다.

        // dto에 저장된 정보대로 저장한다.
    }

    public InquiryToMainResponseDto inquiryToMain(int size) {
        // size만큼 거래정보 많은 쉘순서대로 List로 가져온다.

        // 리스트를 각각 findshells에서 처리해주고

        // dto로 변환해서 리턴한다.
    }

    public InquiryResponseDto inquiry(int limit, int cursor, ShellType shellType, ShellCategory shellCategory) {
        // 커서 형태로 최대 limit만큼 특정 shelltype의 특정 카테고리 shell을 불러온다.

        // 리스트를 각각 findshells에서 처리해주고

        // dto로 변환해서 리턴한다.
    }

    public SearchResponseDto search(int limit, int cursor, String title) {
        // shelltype? -> 타이틀로 검색
    }
}
