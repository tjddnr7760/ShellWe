package com.shellwe.server.domain.member.service;

import com.shellwe.server.domain.member.dto.request.DeleteRequestDto;
import com.shellwe.server.domain.member.dto.request.SignUpRequestDto;
import com.shellwe.server.domain.member.dto.request.UpdateRequestDto;
import com.shellwe.server.domain.member.dto.response.FindResponseDto;
import com.shellwe.server.domain.member.entity.Member;
import com.shellwe.server.domain.member.mapper.MemberMapper;
import com.shellwe.server.domain.member.repository.MemberRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Slf4j
@Service
public class MemberService {

    private final MemberRepository memberRepository;
    private final MemberMapper memberMapper;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public MemberService(MemberRepository memberRepository, MemberMapper memberMapper, PasswordEncoder passwordEncoder) {
        this.memberRepository = memberRepository;
        this.memberMapper = memberMapper;
        this.passwordEncoder = passwordEncoder;
    }

    public void signUpMember(SignUpRequestDto signUpRequestDto) {
        Member member = memberMapper.signUpRequestDtoToMember(signUpRequestDto);
        log.info("sign-up in service layer start, member : {}", member);
        verifyExistEmail(member.getEmail());

        Member encryptedMember = new Member(member, passwordEncoder.encode(member.getPassword()));
        memberRepository.save(encryptedMember);

        log.info("sign-up in service layer done");
    }

    public FindResponseDto findMemberById(Long memberId) {
        log.info("find member in service layer by Id start, memberId : {}", memberId);

        Optional<Member> optionalMember = memberRepository.findById(memberId);
        Member findMember = optionalMember.orElseThrow(() -> new IllegalStateException());

        log.info("find member in service layer by Id done");
        return memberMapper.memberToFindResponseDto(findMember);
    }

    // password, displayName, img
    // jwt 구현후 진행(인증필요)
    public void updateMember(String email, long memberId, UpdateRequestDto updateRequestDto) {
        log.info("update member in service layer start");
        // 매퍼로 멤버 객체로 바꾼다.
        Member member = memberMapper.updateRequestDtoToMember(updateRequestDto);
        // 멤버 객체를 멤버의 파라미터로 넘긴다

        // 자동으로 값을 업데이트한다

        // 멤버를 저장한다

        // 200을 반환한다
        log.info("update member in service layer end");
    }

    // 회원 탈퇴(my page)
    // jwt 구현후 진행(인증필요)
    public void deleteMember(String email, long memberId, DeleteRequestDto deleteRequestDto) {
        log.info("delete member in service layer start");
        // 시큐리티에서 유저 아이디를 가져온다

        // 유저 아이디와 비밀번호를 검증한다

        // 맞으면 회원을 삭제한다

        // 틀리면 예외를 출력한다

        // 회원을 삭제한다

        log.info("delete member in service layer end");
    }

    private void verifyExistEmail(String email) {
        Optional<Member> member = memberRepository.findByEmail(email);

        if (member.isPresent()) {
            throw new IllegalStateException();
        }
    }
}
