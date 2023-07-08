package com.shellwe.server.File;

import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;

@Component
public class ExampleUploadPictureService implements UploadPictureService{
    @Override
    public String onePictureFileToUrl(MultipartFile picture) {
        return "https://example.com/images/updage1.jpg";
    }

    @Override
    public List<String> severalPictureFilesToUrls(List<MultipartFile> pictures) {
        List<String> urls = new ArrayList<>();
        urls.add("https://example.com/images/sample1.jpg");
        urls.add("https://example.com/images/sample2.jpg");
        urls.add("https://example.com/images/sample3.jpg");
        return urls;
    }
}
