package com.shellwe.server.domain.category.dao;

import com.shellwe.server.domain.category.domain.Category;
import com.shellwe.server.global.types.category.ShellCategory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CategoryRepository extends JpaRepository<Category, Long> {

    Optional<Category> findByShellCategory(ShellCategory shellCategory);
}
