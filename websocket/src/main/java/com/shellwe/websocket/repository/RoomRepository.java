package com.shellwe.websocket.repository;

import com.shellwe.websocket.entity.Room;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoomRepository extends JpaRepository<Room, Long> {
}
