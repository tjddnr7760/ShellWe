package com.shellwe.server.domain.member.service;

import com.shellwe.server.domain.member.dto.request.DeleteRequestDto;
import com.shellwe.server.domain.member.dto.request.SignUpRequestDto;
import com.shellwe.server.domain.member.dto.request.UpdateRequestDto;
import com.shellwe.server.domain.member.dto.response.FindResponseDto;
import com.shellwe.server.domain.member.entity.Member;
import com.shellwe.server.domain.member.mapper.MemberMapper;
import com.shellwe.server.domain.member.repository.MemberRepository;
import com.shellwe.server.email.EmailSendable;
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
    private final EmailSendable emailSendable;

    @Autowired
    public MemberService(MemberRepository memberRepository, MemberMapper memberMapper,
                         PasswordEncoder passwordEncoder, EmailSendable emailSendable) {
        this.memberRepository = memberRepository;
        this.memberMapper = memberMapper;
        this.passwordEncoder = passwordEncoder;
        this.emailSendable = emailSendable;
    }

    public void signUpMember(SignUpRequestDto signUpRequestDto) throws InterruptedException {
        Member member = memberMapper.signUpRequestDtoToMember(signUpRequestDto);
        log.info("sign-up in service layer start, member : {}", member);
        verifyExistEmail(member.getEmail());

        Member encryptedMember = new Member(member, passwordEncoder.encode(member.getPassword()));
        memberRepository.save(encryptedMember);

        emailSendable.send(new String[]{member.getEmail()}, "ShellWe 회원가입 인증",
                member.getEmail(), "email-registration-member");
        log.info("sent email and sign-up in service layer done");
    }

    public void verifyEmail(String email) {
        Member findMember = findByEmail(email);

        findMember.emailVerificationCompleted();
        memberRepository.save(findMember);

        log.info("email verification completed");
    }

    public FindResponseDto findMemberById(String email, Long memberId) {
        log.info("find member in service layer by Id start, memberId : {}", memberId);
        FindResponseDto findResponseDto = new FindResponseDto();
        if (email == null) {
            Member findMember = findById(memberId);
            findResponseDto.setMeIdName(false, findMember.getId(), findMember.getDisplayName());
            return findResponseDto;
        }

        Member member = findByEmail(email);
        if (member.getId() != memberId) {
            Member findMember = findById(memberId);
            findResponseDto.setMeIdName(false, findMember.getId(), findMember.getDisplayName());
        }
        if (member.getId() == memberId) {
            Member findMember = findById(memberId);
            findResponseDto.setMeIdName(true, findMember.getId(), findMember.getDisplayName());
        }

        log.info("find member in service layer by Id done");
        return findResponseDto;
    }

    public void updateMember(String email, long memberId, UpdateRequestDto updateRequestDto) {
        log.info("update member in service layer start");
        Member findMember = findByEmail(email);
        long findId = findMember.getId();

        if (memberId == findId) {
            findMember.updateMember(updateRequestDto.getPassword(), updateRequestDto.getDisplayName(), passwordEncoder);
            memberRepository.save(findMember);
        } else {
            throw new IllegalStateException("자신의 아이디만 수정 가능합니다.");
        }

        log.info("update member in service layer end");
    }

    public void deleteMember(String email, long memberId, DeleteRequestDto deleteRequestDto) {
        log.info("delete member in service layer start");
        Member findMember = findByEmail(email);
        long findId = findMember.getId();

        System.out.println("findId = " + findId);
        System.out.println("memberId = " + memberId);
        System.out.println("findMemberPassword = " + findMember.getPassword());
        System.out.println("deleteRequestDto = " + deleteRequestDto.getPassword());

        if (memberId == findId && passwordEncoder.matches(deleteRequestDto.getPassword(), findMember.getPassword())) {
            memberRepository.delete(findMember);
        } else {
            throw new IllegalStateException("자신의 아이디만 삭제 가능합니다.");
        }

        log.info("delete member in service layer end");
    }

    private Member findByEmail(String email) {
        Optional<Member> byEmail = memberRepository.findByEmail(email);
        Member member = byEmail.orElseThrow(() -> new IllegalStateException());
        return member;
    }

    private Member findById(long memberId) {
        Optional<Member> byId = memberRepository.findById(memberId);
        Member member = byId.orElseThrow(() -> new IllegalStateException());
        return member;
    }

    private void verifyExistEmail(String email) {
        Optional<Member> member = memberRepository.findByEmail(email);

        if (member.isPresent()) {
            throw new IllegalStateException();
        }
    }
}
