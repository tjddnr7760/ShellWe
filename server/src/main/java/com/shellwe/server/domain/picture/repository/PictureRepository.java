package com.shellwe.server.domain.picture.repository;

import com.shellwe.server.domain.picture.entity.Picture;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PictureRepository extends JpaRepository<Picture, Long> {
    @Query("select p from Picture p where p.shell.id = :id")
    List<Picture> findByShellId(@Param("id") Long id);

    @Query("select p from Picture p where p.member.id = :id")
    Picture findByMemberId(@Param("id") Long id);
}
