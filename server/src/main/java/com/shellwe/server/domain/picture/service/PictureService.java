package com.shellwe.server.domain.picture.service;

import com.shellwe.server.file.service.UploadPictureService;
import org.springframework.stereotype.Service;

@Service
public class PictureService {

    private final UploadPictureService uploadPictureService;

    public PictureService(UploadPictureService uploadPictureService /*, add your Picture and Member repository here */) {
        this.uploadPictureService = uploadPictureService;
    }


}
