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
public class Member extends TimeTracker {
    public Member(Long memberId) {
        this.id = memberId;
    }
    public Member(Long id, String email, Boolean emailVerificationStatus, String password, String displayName) {
        this.id = id;
        this.email = email;
        this.emailVerificationStatus = emailVerificationStatus;
        this.password = password;
        this.displayName = displayName;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "MEMBER_ID")
    private Long id;

    @Column
    private String email;

    @Column(name = "EMAIL_VERIFICATION_STATUS", nullable = false)
    private Boolean emailVerificationStatus;

    @Column
    private String password;

    @Column
    private String displayName;

    @Column
    private String profileUrl;

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

}