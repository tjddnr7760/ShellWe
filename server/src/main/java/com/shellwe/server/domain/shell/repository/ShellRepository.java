package com.shellwe.server.domain.shell.repository;

import com.shellwe.server.domain.shell.entity.Shell;
import com.shellwe.server.domain.types.ShellType;
import com.shellwe.server.domain.types.category.ShellCategory;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ShellRepository extends JpaRepository<Shell, Long> {
//    @Query("select s from Shell s " +
//            "join fetch s.member m " +
//            "where s.id < :cursor " +
//            "and s.shellType = :shellType " +
//            "and s.shellCategory = :shellCategory " +
//            "order by s.id desc")
//    List<Shell> findShells(@Param("cursor") int cursor,
//                           @Param("shellType") ShellType shellType,
//                           @Param("shellCategory") ShellCategory shellCategory,
//                           @Param("limit") int limit);

//    @Query("select s from Shell s " +
//            "join fetch s.member m " +
//            "where (s.title like %:title% or s.body like %:title%) " +
//            "and s.id < :cursor " +
//            "order by s.id desc")
//    List<Shell> searchShells(@Param("title") String title,
//                             @Param("cursor") int cursor,
//                             Pageable pageable);
}

