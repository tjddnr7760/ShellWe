package com.shellwe.websocket.repository;

import com.shellwe.websocket.entity.Member;
import com.shellwe.websocket.entity.MemberRoom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;


public interface MemberRoomRepository extends JpaRepository<MemberRoom, Long> {
    @Query(value = "select member_room.* from member_room\n" +
            "inner join (select room_id from member_room where member_id = 1) as a on a.room_id = member_room.room_id \n" +
            "where member_id != 1", nativeQuery = true)
    List<MemberRoom> findAllMyRoomsWithSeller(Long memberId);
}
