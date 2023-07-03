package com.shellwe.server.domain.member.entity;

import com.shellwe.server.domain.shell.entity.Shell;
import com.shellwe.server.utils.TimeTracker;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Builder
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
    private List<Shell> shells = new ArrayList<>();

    public Member(Member member, String password) {
        this.email = member.getEmail();
        this.displayName = member.getDisplayName();
        this.shells = member.getShells();
        this.password = password;
    }

    @Builder
    public Member(String email, String password, String displayName, List<Shell> shells) {
        this.email = email;
        this.password = password;
        this.displayName = displayName;
        if (shells != null) {
            this.shells = shells;
        }
    }

    public void addShell(Shell shell) {
        this.shells.add(shell);
        shell.setMember(this);
    }
}
