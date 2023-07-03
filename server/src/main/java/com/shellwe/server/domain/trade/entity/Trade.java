package com.shellwe.server.domain.trade;

import com.shellwe.server.domain.member.Member;
import com.shellwe.server.domain.shell.Shell;
import com.shellwe.server.utils.TimeTracker;
import lombok.Getter;

@Getter
public class Trade extends TimeTracker {

    private Long id;

    private Member seller;

    private Shell sellerShell;

    private Shell buyerShell;
}
