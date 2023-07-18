package com.shellwe.websocket.mapper;

import com.shellwe.websocket.auth.memberDetails.MemberContextInform;
import com.shellwe.websocket.dto.MemberDto;
import com.shellwe.websocket.dto.MessageDto;
import com.shellwe.websocket.dto.RoomDto;
import com.shellwe.websocket.entity.Member;
import com.shellwe.websocket.entity.MemberRoom;
import com.shellwe.websocket.entity.Message;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

import java.util.List;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface RoomMapper {
    MemberDto.Response memberToMemberResponse(Member member);
    MemberDto.Response memberContextToMemberResponse(MemberContextInform member);
    default RoomDto.Response memberRoomToWsResponse(MemberRoom memberRoom, long unreadCount, String message){
        return RoomDto.Response.builder()
                .id(memberRoom.getRoom().getId())
                .unread(unreadCount)
                .lastMessage(message)
                .member(memberToMemberResponse(memberRoom.getMember()))
                .build();
    };
    default MessageDto.Response messageToMessageResponse(Message message, long memberId){
        return MessageDto.Response.builder()
                .createdAt(message.getCreatedAt())
                .payload(message.getPayload())
                .roomId(message.getRoom().getId())
                .member(memberToMemberResponse(message.getMember()))
                .notification(message.isNotification())
                .mine(!message.isNotification() && memberId == message.getMember().getId())
                .build();
    };
}
