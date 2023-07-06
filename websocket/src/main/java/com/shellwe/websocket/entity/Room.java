package com.shellwe.websocket.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Room extends Auditable{
    public Room(Long roomId) {
        this.roomId = roomId;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long roomId;

    @OneToMany(mappedBy = "room", cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
    private List<Message> messages = new ArrayList<>();

    @OneToMany(mappedBy = "room", cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
    private List<MemberRoom> memberRooms = new ArrayList<>();

    public void setMemberRooms(MemberRoom memberRoom){
        this.memberRooms.add(memberRoom);
        if (memberRoom.getRoom() != this) memberRoom.setRoom(this);
    }

    public void setMessages(Message message){
        this.messages.add(message);
        if (message.getRoom() != this) message.setRoom(this);
    }
}
