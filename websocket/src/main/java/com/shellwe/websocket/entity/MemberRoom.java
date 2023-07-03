package com.shellwe.websocket.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class MemberRoom {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long memberRoomId;

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;

    @ManyToOne
    @JoinColumn(name = "room_id",unique = false)
    private Room room;

    public void setMember(Member member){
        this.member = member;
        member.setMemberRooms(this);
    }
    public void setRoom(Room room){
        this.room = room;
        room.setMemberRooms(this);
    }
}
