package com.shellwe.server.domain.member.entity;

import com.shellwe.server.domain.shell.entity.Shell;
import com.shellwe.server.utils.TimeTracker;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Table(name = "MEMBER")
@Entity
public class Member extends TimeTracker {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "MEMBER_ID")
    private Long id;

    private String email;

    private String password;

    private String displayName;

    @OneToMany(mappedBy = "member")
    private List<Shell> shells;

    public void addShell(Shell shell) {
        this.shells.add(shell);
        shell.setMember(this);
    }
}
