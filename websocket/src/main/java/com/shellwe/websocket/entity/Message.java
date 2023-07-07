package com.shellwe.websocket.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Message extends TimeTracker{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "MESSAGE_ID")
    private Long id;


    @Column
    private String payload;

    @Column(columnDefinition = "boolean default true")
    private boolean unread;

    @Column
    private boolean Notification;

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;

    @ManyToOne
    @JoinColumn(name = "room_id")
    private Room room;
}
