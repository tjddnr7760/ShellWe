package com.shellwe.server.domain.category.domain;

import com.shellwe.server.global.types.category.ShellCategory;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "CATEGORY_ID")
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column(name = "SHELL_CATEGORY", unique = true)
    private ShellCategory shellCategory;

    public void setShellCategory(ShellCategory shellCategory) {
        this.shellCategory = shellCategory;
    }
}
