package com.shellwe.server.infra.file.service;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.*;
import com.amazonaws.util.IOUtils;
import com.shellwe.server.global.exception.customexception.FileUploadLogicException;
import com.shellwe.server.global.exception.exceptioncode.FileUploadExceptionCode;
import com.shellwe.server.infra.file.filefolder.FileFolder;
import com.shellwe.server.infra.file.s3component.S3Component;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor
public class UploadPictureS3 implements UploadPictureService {

    private final S3Component s3Component;
    private final AmazonS3 amazonS3;

    @Override
    public String onePictureFileToUrl(MultipartFile picture) {
        String fileName = uploadFile(picture, FileFolder.MEMBER_FOLDER);
        return getFileUrl(fileName);
    }

    @Override
    public List<String> severalPictureFilesToUrls(List<MultipartFile> pictures) {
        return uploadFiles(pictures, FileFolder.SHELL_FOLDER)
                .stream()
                .map(this::getFileUrl)
                .collect(Collectors.toList());
    }

    public String uploadFile(MultipartFile file, FileFolder fileFolder) {
        String fileName = getFileFolder(fileFolder) + createFileName(file.getOriginalFilename());
        ObjectMetadata objectMetadata = new ObjectMetadata();
        objectMetadata.setContentLength(file.getSize());
        objectMetadata.setContentType(file.getContentType());

        try (InputStream inputStream = file.getInputStream()) {
            amazonS3.putObject(
                    new PutObjectRequest(s3Component.getBucket(), fileName, inputStream, objectMetadata)
                            .withCannedAcl(CannedAccessControlList.PublicReadWrite)
            );
        } catch (IOException e) {
            throw new FileUploadLogicException(FileUploadExceptionCode.NOT_SUPPORTED_FILE_FORM);
        }

        return fileName;
    }

    public List<String> uploadFiles(List<MultipartFile> files, FileFolder fileFolder) {
        return files.stream()
                .map(file -> uploadFile(file, fileFolder))
                .collect(Collectors.toList());
    }

    private String createFileName(String originalFileName) {
        return UUID.randomUUID().toString().concat(getFileExtension(originalFileName));
    }

    private String getFileExtension(String fileName){
        try{
            return fileName.substring(fileName.lastIndexOf("."));
        }catch(StringIndexOutOfBoundsException e) {
            throw new FileUploadLogicException(FileUploadExceptionCode.FILE_CONVERT_ERROR);
        }
    }

    public String getFileUrl(String fileName) {
        return amazonS3.getUrl(s3Component.getBucket(), fileName).toString();
    }

    public byte[] downloadFile(String fileName) throws FileNotFoundException {
        validateFileExists(fileName);

        S3Object s3Object = amazonS3.getObject(s3Component.getBucket(), fileName);
        S3ObjectInputStream s3ObjectContent = s3Object.getObjectContent();

        try {
            return IOUtils.toByteArray(s3ObjectContent);
        }catch (IOException e ){
            throw new FileNotFoundException();
        }
    }

    private void validateFileExists(String fileName) throws FileNotFoundException {
        if(!amazonS3.doesObjectExist(s3Component.getBucket(), fileName))
            throw new FileNotFoundException();
    }

    public String getFileFolder(FileFolder fileFolder) {

        String folder = "";
        if(fileFolder == FileFolder.MEMBER_FOLDER) {
            folder = s3Component.getMemberFolder();

        }else if(fileFolder ==FileFolder.SHELL_FOLDER){
            folder = s3Component.getShellFolder();
        }
        return folder;
    }
}
