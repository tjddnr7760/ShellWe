package com.shellwe.server.domain.shell.repository;

import com.shellwe.server.domain.shell.entity.Shell;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ShellRepository extends JpaRepository<Shell, Long> {
}
