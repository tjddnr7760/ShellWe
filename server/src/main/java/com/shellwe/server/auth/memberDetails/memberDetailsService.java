package com.shellwe.server.global.auth.memberDetails;

import com.shellwe.server.domain.member.entity.Member;
import com.shellwe.server.domain.member.repository.MemberRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import java.util.Optional;

public class memberDetailsService implements UserDetailsService {

    private final MemberRepository memberRepository;

    public memberDetailsService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Optional<Member> byEmail = memberRepository.findByEmail(email);
        Member member = byEmail.orElseThrow(() -> new IllegalStateException("회원 정보가 없습니다."));

        return new memberDetails(member);
    }
}
