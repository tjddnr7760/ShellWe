package com.shellwe.server.domain.member.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class FindResponseDtoIncludeOauth {

    @JsonProperty("isMe")
    private boolean isMe;

    private Long id;

    private String displayName;

    private boolean oauthUser = false;

    private String profileUrl;

    public void setIsMeIdName(boolean isMe, Long id, String displayName) {
        this.isMe = isMe;
        this.id = id;
        this.displayName = displayName;
    }
}
