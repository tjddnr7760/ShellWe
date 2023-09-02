package com.shellwe.server.domain.tag.domain;

import com.shellwe.server.domain.shell.domain.Shell;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Table(name = "TAG")
@Entity
public class Tag {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "TAG_ID")
    private Long id;

    @Column(name = "TAG_NAME")
    private String tagName;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "SHELL_ID")
    private Shell shell;

    public void setTagName(String tagName) {
        this.tagName = tagName;
    }
}
