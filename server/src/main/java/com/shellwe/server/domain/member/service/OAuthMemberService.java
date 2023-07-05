package com.shellwe.server.domain.member.service;

import com.shellwe.server.domain.member.entity.Member;
import com.shellwe.server.domain.member.repository.MemberRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Slf4j
@Service
public class OAuthMemberService {

    private final MemberRepository memberRepository;

    public OAuthMemberService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    public void oauthSignUpMember(Member member) {
        log.info("sign-up in service layer by oauth start, member : {}", member);

        if (verifyExistEmailByOauth(member.getEmail())) {
            log.info("exist member in oauth");
            return;
        }
        log.info("member password null");
        memberRepository.save(member);

        log.info("sign-up in service layer done");
    }

    private boolean verifyExistEmailByOauth(String email) {
        boolean exist = false;
        Optional<Member> member = memberRepository.findByEmail(email);

        if (member.isPresent()) {
            exist = true;
        }
        return exist;
    }
}
