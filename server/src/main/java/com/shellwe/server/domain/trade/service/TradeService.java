package com.shellwe.server.domain.trade.service;

import com.shellwe.server.domain.member.entity.Member;
import com.shellwe.server.domain.member.service.MemberService;
import com.shellwe.server.domain.trade.dto.request.UpdateTradeStatusRequestDto;
import com.shellwe.server.domain.trade.dto.response.InquiryToMainResponseDto;
import com.shellwe.server.domain.shell.entity.Shell;
import com.shellwe.server.domain.shell.service.ShellService;
import com.shellwe.server.domain.trade.dto.request.TradeRequestDto;
import com.shellwe.server.domain.trade.dto.response.MyTradeResponseDto;
import com.shellwe.server.domain.trade.entity.Trade;
import com.shellwe.server.domain.trade.mapper.TradeMapper;
import com.shellwe.server.domain.trade.respository.TradeRepository;
import com.shellwe.server.domain.types.Status;
import com.shellwe.server.exception.customexception.TradeLogicException;
import com.shellwe.server.exception.exceptioncode.TradeExceptionCode;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

@Slf4j
@Transactional
@Service
public class TradeService {

    private final TradeRepository tradeRepository;
    private final MemberService memberService;
    private final ShellService shellService;
    private final TradeMapper tradeMapper;

    @Autowired
    public TradeService(TradeRepository tradeRepository, MemberService memberService, ShellService shellService, TradeMapper tradeMapper) {
        this.tradeRepository = tradeRepository;
        this.memberService = memberService;
        this.shellService = shellService;
        this.tradeMapper = tradeMapper;
    }

    public void trade(TradeRequestDto tradeRequestDto, long sellerId, long buyerId) {
        Member seller = memberService.getMemberByOtherLayer(sellerId);
        Member buyer = memberService.getMemberByOtherLayer(buyerId);
        Shell buyerShell = shellService.getShellByOtherLayer(tradeRequestDto.getBuyerShellId());
        Shell sellerShell = shellService.getShellByOtherLayer(tradeRequestDto.getSellerShellId());

        tradeRepository.save(new Trade(seller, buyer, buyerShell, sellerShell));
    }

    @Transactional(readOnly = true)
    public MyTradeResponseDto myTrade(long memberId) {
        List<Long> sellerShellsId = tradeRepository.getSellerShellsBySellerId(memberId);
        List<Shell> sellerShells = shellService.getShellsByOtherLayer(sellerShellsId);

        MyTradeResponseDto myTradeResponseDto = new MyTradeResponseDto();
        myTradeResponseDto.setShells(tradeMapper.sellerTradeListToMyTradeResponseDto(sellerShells));
        return myTradeResponseDto;
    }

    @Transactional(readOnly = true)
    public MyTradeResponseDto mySpecificShellTrade(long shellId, long memberId) {
        List<Long> buyerShellsId = tradeRepository.getSellerTradesByShellIdAndMemberId(memberId, shellId);
        List<Shell> buyerShells = shellService.getShellsByOtherLayer(buyerShellsId);

        MyTradeResponseDto myTradeResponseDto = new MyTradeResponseDto();
        myTradeResponseDto.setShells(tradeMapper.buyerTradeListToMyTradeResponseDto(buyerShells));
        return myTradeResponseDto;
    }

    public void updateTradeStatus(long shellId, UpdateTradeStatusRequestDto updateTradeStatusRequestDto, long memberId) {
        Shell shell = shellService.getShellByOtherLayer(shellId);

        if (shell.getMember().getId() == memberId) {
            shell.setStatus(updateTradeStatusRequestDto.getStatus());
            if (updateTradeStatusRequestDto.getStatus().equals(Status.INACTIVE)) {
                tradeRepository.deleteAllBySellerId(shell.getId());
            }
        } else {
            throw new TradeLogicException(TradeExceptionCode.TRADE_NOT_MY_ID);
        }
    }

    @Transactional(readOnly = true)
    public InquiryToMainResponseDto inquiryToMain(int size) {
        List<Object[]> shellsInform = tradeRepository.findShells(size);
        List<Long> shellIds = shellsInform.stream()
                .map(data -> (Long) data[0])
                .collect(Collectors.toList());
        List<Integer> shellCounts = shellsInform.stream()
                .map(data -> ((Long) data[1]).intValue())
                .collect(Collectors.toList());

        List<Shell> shells = shellService.getShellsByOtherLayer(shellIds);
        InquiryToMainResponseDto inquiryToMainResponseDto = new InquiryToMainResponseDto();
        inquiryToMainResponseDto.setShells(tradeMapper.shellsToInquiryToMainResponseDto(shells));
        IntStream.range(0, shells.size())
                .forEach(i -> inquiryToMainResponseDto.getShells().get(i).setNumberOfTrades(shellCounts.get(i)));
        return inquiryToMainResponseDto;
    }
}
