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
public class Member extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long memberId;

    @Column
    private String email;

    @Column
    private String password;

    @Column
    private String nickname;

    @OneToMany(mappedBy = "member", cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
    private List<Message> messages = new ArrayList<>();

    @OneToMany(mappedBy = "member", cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
    private List<MemberRoom> memberRooms = new ArrayList<>();

    public void setMemberRooms(MemberRoom memberRoom){
        this.memberRooms.add(memberRoom);
        if (memberRoom.getMember() != this) memberRoom.setMember(this);
    }

    public void setMessages(Message message){
        this.messages.add(message);
        if (message.getMember() != this) message.setMember(this);
    }

    //shells
}