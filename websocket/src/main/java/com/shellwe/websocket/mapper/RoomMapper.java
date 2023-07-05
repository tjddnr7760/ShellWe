package com.shellwe.websocket.mapper;

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
    default RoomDto.Response memberRoomToWsResponse(MemberRoom memberRoom){
        return RoomDto.Response.builder()
                .roomId(memberRoom.getRoom().getRoomId())
                .member(memberToMemberResponse(memberRoom.getMember()))
                .build();
    };
    List<RoomDto.Response> memberRoomsToWsResponses(List<MemberRoom> memberRooms);
    default MessageDto.Response messageToMessageResponse(Message message, long memberId){
        return MessageDto.Response.builder()
                .createdAt(message.getCreatedAt())
                .payload(message.getPayload())
                .roomId(message.getRoom().getRoomId())
                .member(memberToMemberResponse(message.getMember()))
                .notification(message.isNotification())
                .mine(!message.isNotification() && memberId == message.getMember().getMemberId())
                .build();
    };
}
