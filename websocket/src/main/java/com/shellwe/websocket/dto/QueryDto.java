package com.shellwe.websocket.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class QueryDto {
    private long roomId;
    private long memberId;
}
