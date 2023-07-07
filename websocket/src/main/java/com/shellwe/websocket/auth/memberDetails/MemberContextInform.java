package com.shellwe.websocket.auth.memberDetails;

import lombok.Getter;

@Getter
public class MemberContextInform {
    private Long id;
    private String email;
    private String displayName;
    private String profileUrl;
    // 이미지는 도메인 구현 후 추가

    public MemberContextInform(Long id, String email, String displayName, String profileUrl) {
        this.id = id;
        this.email = email;
        this.displayName = displayName;
        this.profileUrl = profileUrl;
    }
}
