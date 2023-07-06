package com.shellwe.server.domain.shell.service;

import com.shellwe.server.domain.shell.mapper.ShellMapper;
import com.shellwe.server.domain.shell.repository.ShellRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class ShellService {

    private final ShellRepository shellRepository;
    private final ShellMapper shellMapper;

    @Autowired
    public ShellService(ShellRepository shellRepository, ShellMapper shellMapper) {
        this.shellRepository = shellRepository;
        this.shellMapper = shellMapper;
    }


}
