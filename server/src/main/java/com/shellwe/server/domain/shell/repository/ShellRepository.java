package com.shellwe.server.domain.shell.repository;

import com.shellwe.server.domain.shell.entity.Shell;
import com.shellwe.server.domain.types.ShellType;
import com.shellwe.server.domain.types.category.ShellCategory;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface ShellRepository extends JpaRepository<Shell, Long> {
    @Query("select s from Shell s " +
            "join fetch s.member m " +
            "where s.id < :cursor " +
            "and s.shellType = :shellType " +
            "and s.category.shellCategory = :shellCategory " +
            "order by s.id desc")
    List<Shell> findShells(@Param("cursor") Long cursor,
                           @Param("shellType") ShellType shellType,
                           @Param("shellCategory") ShellCategory shellCategory,
                           Pageable pageable);

    @Query("select s from Shell s " +
            "join fetch s.member m " +
            "where (s.title like %:title% or s.body like %:title%) " +
            "and s.id < :cursor " +
            "order by s.id desc")
    List<Shell> searchShells(@Param("title") String title,
                             @Param("cursor") Long cursor,
                             Pageable pageable);

    @Query("select s from Shell s " +
            "join fetch s.member m " +
            "where s.id < :cursor " +
            "and s.shellType = :shellType " +
            "order by s.id desc")
    List<Shell> findAllCategoryShells(@Param("cursor") Long cursor,
                           @Param("shellType") ShellType shellType,
                           Pageable pageable);

    @Query("SELECT MAX(s.id) FROM Shell s")
    Optional<Long> findMaxId();
}


