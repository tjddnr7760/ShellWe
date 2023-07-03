package com.shellwe.websocket.mapper;

import com.shellwe.websocket.dto.MemberDto;
import com.shellwe.websocket.dto.WsDto;
import com.shellwe.websocket.entity.Member;
import com.shellwe.websocket.entity.MemberRoom;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

import java.util.List;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface WsMapper {
    MemberDto.Response memberToMemberResponse(Member member);
    default WsDto.Response memberRoomToWsResponse(MemberRoom memberRoom){
        return WsDto.Response.builder()
                .roomId(memberRoom.getRoom().getRoomId())
                .member(memberToMemberResponse(memberRoom.getMember()))
                .build();
    };
    List<WsDto.Response> memberRoomsToWsResponses(List<MemberRoom> memberRooms);
}
