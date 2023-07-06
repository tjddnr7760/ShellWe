package com.shellwe.websocket.service;


import com.shellwe.websocket.entity.Member;
import com.shellwe.websocket.entity.MemberRoom;
import com.shellwe.websocket.entity.Room;
import com.shellwe.websocket.exception.businessLogicException.BusinessLogicException;
import com.shellwe.websocket.exception.businessLogicException.ExceptionCode;
import com.shellwe.websocket.mapper.RoomMapper;
import com.shellwe.websocket.repository.MemberRepository;
import com.shellwe.websocket.repository.MemberRoomRepository;
import com.shellwe.websocket.repository.MessageRepository;
import com.shellwe.websocket.repository.RoomRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import javax.transaction.Transactional;
import java.util.Optional;

@Slf4j
@RequiredArgsConstructor
@org.springframework.stereotype.Service
@Transactional
public abstract class Service {
    protected final MemberRoomRepository memberRoomRepository;
    protected final MemberRepository memberRepository;
    protected final RoomRepository roomRepository;
    protected final MessageRepository messageRepository;
    protected final RoomMapper roomMapper;
    protected Member findExistsMember(long memberId){
        Optional<Member> optionalMember = memberRepository.findById(memberId);
        return optionalMember.orElseThrow(()->new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
    }
    protected MemberRoom findExistsMemberRoom(long roomId, long memberId){
        Optional<MemberRoom> optionalMemberRoom = memberRoomRepository.findByRoomAndMemberAndActiveTrue(new Room(roomId), new Member(memberId));
        return optionalMemberRoom.orElseThrow(()->new BusinessLogicException(ExceptionCode.MEMBER_ROOM_NOT_FOUND));
    }
}
