package com.shellwe.websocket.repository;

import com.shellwe.websocket.entity.Message;
import com.shellwe.websocket.entity.Room;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MessageRepository extends JpaRepository<Message,Long> {
    List<Message> findAllByRoomOrderByMessageIdAsc(Room room);
}
