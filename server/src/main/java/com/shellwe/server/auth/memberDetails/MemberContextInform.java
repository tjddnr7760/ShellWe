package com.shellwe.server.auth.memberDetails;

import lombok.Getter;

@Getter
public class MemberContextInform {
    private String email;
    private String displayName;
    private String id;
    // 이미지는 도메인 구현 후 추가

    public MemberContextInform(String email, String displayName, String id) {
        this.email = email;
        this.displayName = displayName;
        this.id = id;
    }
}
