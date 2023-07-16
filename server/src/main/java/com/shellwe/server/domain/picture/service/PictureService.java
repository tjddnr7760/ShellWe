package com.shellwe.server.domain.picture.service;

import com.shellwe.server.domain.member.entity.Member;
import com.shellwe.server.domain.picture.entity.Picture;
import com.shellwe.server.file.service.FileService;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class PictureService {

    private final FileService fileService;

    public PictureService(FileService fileService /*, add your Picture and Member repository here */) {
        this.fileService = fileService;
    }


}
