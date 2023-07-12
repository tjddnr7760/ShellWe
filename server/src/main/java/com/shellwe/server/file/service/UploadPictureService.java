package com.shellwe.server.file.service;

import com.shellwe.server.file.filefolder.FileFolder;
import org.springframework.web.multipart.MultipartFile;

import java.io.FileNotFoundException;
import java.util.List;

public interface UploadPictureService {
    //파일 업로드
    String uploadFile(MultipartFile file, FileFolder fileFolder);

    List<String> uploadFiles(List<MultipartFile> files, FileFolder fileFolder);

    //파일 삭제
    void deleteFile(String fileName);

    //파일 URL 조회
    String getFileUrl(String fileName);


    //파일 다운로드
    byte[] downloadFile(String fileName) throws FileNotFoundException;

    //폴더 조회
    String getFileFolder(FileFolder fileFolder);

    String onePictureFileToUrl(MultipartFile picture);

    List<String> severalPictureFilesToUrls(List<MultipartFile> pictures);
}
