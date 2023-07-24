package com.shellwe.server.domain.category.repository;

import com.shellwe.server.domain.category.entity.Category;
import com.shellwe.server.domain.types.category.ShellCategory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CategoryRepository extends JpaRepository<Category, Long> {

    Optional<Category> findByShellCategory(ShellCategory shellCategory);
}
