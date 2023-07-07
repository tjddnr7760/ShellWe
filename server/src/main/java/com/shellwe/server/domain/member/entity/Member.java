package com.shellwe.server.domain.member.entity;

import com.shellwe.server.domain.shell.entity.Shell;
import com.shellwe.server.utils.TimeTracker;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;

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

    @Column(name = "EMAIL_VERIFICATION_STATUS", nullable = false)
    private Boolean emailVerificationStatus;

    private String password;

    private String displayName;

    private String profileUrl = "empty";

    @OneToMany(mappedBy = "member")
    private List<Shell> shells = new ArrayList<>();

    public Member(Member member, String password) {
        this.email = member.getEmail();
        this.emailVerificationStatus = member.getEmailVerificationStatus();
        this.displayName = member.getDisplayName();
        this.shells = member.getShells();
        this.password = password;
    }

    public Member(Long id, String email, Boolean emailVerificationStatus, String password, String displayName) {
        this.id = id;
        this.email = email;
        this.emailVerificationStatus = emailVerificationStatus;
        this.password = password;
        this.displayName = displayName;
    }

    @Builder
    public Member(String email,
                  String password,
                  String displayName,
                  List<Shell> shells) {

        this.email = email;
        this.password = password;
        this.displayName = displayName;
        if (shells != null) {
            this.shells = shells;
        }
    }

    public void emailVerificationCompleted() {
        this.emailVerificationStatus = true;
    }

    public void updateMember(String password, String displayName, PasswordEncoder passwordEncoder) {
        if (password != null) {
            this.password = passwordEncoder.encode(password);
        }
        if (displayName != null) {
            this.displayName = displayName;
        }
    }

    public void addShell(Shell shell) {
        this.shells.add(shell);
        shell.setMember(this);
    }
}
