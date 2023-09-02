package com.shellwe.server.infra.file.service;

import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface UploadPictureService {

    String onePictureFileToUrl(MultipartFile picture);

    List<String> severalPictureFilesToUrls(List<MultipartFile> pictures);
}
