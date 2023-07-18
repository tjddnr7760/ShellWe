package com.shellwe.websocket.unitTest.auth;

import com.shellwe.websocket.auth.memberDetails.MemberDetails;
import com.shellwe.websocket.auth.memberDetails.MemberDetailsService;
import com.shellwe.websocket.entity.Member;
import com.shellwe.websocket.entity.Room;
import com.shellwe.websocket.repository.MemberRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.BDDMockito.given;

@ExtendWith(MockitoExtension.class)
public class MemberDetailsServiceTest {
    @InjectMocks
    private MemberDetailsService memberDetailsService;
    @Mock
    private MemberRepository memberRepository;

    @Test
    void loadUserByUsernameSuccess(){
        given(memberRepository.findByEmail(Mockito.anyString())).willReturn(Optional.of(new Member()));
        assertThat(memberDetailsService.loadUserByUsername(Mockito.anyString())).isInstanceOf(MemberDetails.class);
    }
    @Test
    void loadUserByUsernameFail(){
        given(memberRepository.findByEmail(Mockito.anyString())).willReturn(Optional.ofNullable(null));
        assertThatThrownBy(()->memberDetailsService.loadUserByUsername(Mockito.anyString())).isInstanceOf(IllegalStateException.class);
    }
}
