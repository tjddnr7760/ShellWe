package com.shellwe.server.domain.category.service;

import com.shellwe.server.domain.category.entity.Category;
import com.shellwe.server.domain.category.repository.CategoryRepository;
import com.shellwe.server.domain.types.category.ShellCategory;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Service
public class CategoryService {

    private final CategoryRepository categoryRepository;

    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    @Transactional
    public Category findOrCreate(ShellCategory shellCategory) {
        return categoryRepository.findByShellCategory(shellCategory)
                .orElseGet(() -> {
                    Category newCategory = new Category();
                    newCategory.setShellCategory(shellCategory);
                    return categoryRepository.save(newCategory);
                });
    }
}
