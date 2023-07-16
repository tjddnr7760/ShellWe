import { FileWithPath, useDropzone } from 'react-dropzone';
import { useState } from 'react';

import { compareFiles } from '../../utill/compareFiles';
import { moveItemToStart } from '../../utill/moveItemToStart';
import {
  Container,
  DeleteButton,
  DropzoneWrapper,
  UploadZone,
  UploadedImage,
  UploadedImageWrapper,
  UploadExplanation,
} from './ImageUploder.styled';

interface ImageUploaderProps {
  uploadedImages: File[];
  setUploadedImages: React.Dispatch<React.SetStateAction<FileWithPath[]>>;
}

export const ImageUploader = ({
  uploadedImages,
  setUploadedImages,
}: ImageUploaderProps) => {
  const handleImageUpload = async (acceptedFiles: FileWithPath[]) => {
    const uniqueFiles = acceptedFiles
      .filter((_file, index) => index < 4)
      .filter(
        (selectedFile) =>
          !uploadedImages.some((image) => compareFiles(image, selectedFile))
      );

    setUploadedImages([...uploadedImages, ...uniqueFiles]);
  };

  const { getRootProps } = useDropzone({
    onDrop: handleImageUpload,
    noClick: true,
    multiple: true,
  });

  const handleImageDelete = (index: number) => {
    const updatedImages = [...uploadedImages];
    updatedImages.splice(index, 1);
    setUploadedImages(updatedImages);
  };

  const handleTitleImageChange = (index: number) => {
    if (index === 0) {
      return; // 0번 인덱스는 예외 처리
    }

    setUploadedImages((prevImages: FileWithPath[]) => {
      const updatedImages = moveItemToStart<FileWithPath>(prevImages, index);
      return updatedImages;
    });
  };

  return (
    <Container {...getRootProps()}>
      <DropzoneWrapper>
        <UploadZone>
          {uploadedImages[0] ? (
            uploadedImages.map((image, index) => {
              return (
                <UploadedImageWrapper key={index}>
                  <UploadedImage
                    src={URL.createObjectURL(image)}
                    alt={`Preview ${index}`}
                    onClick={() => handleTitleImageChange(index)}
                  />
                  <DeleteButton onClick={() => handleImageDelete(index)}>
                    X
                  </DeleteButton>
                </UploadedImageWrapper>
              );
            })
          ) : (
            <div>이미지를 드래그해서 올려주세요(최대 4개)</div>
          )}
        </UploadZone>
        <UploadExplanation>
          이미지 클릭시 대표이미지를 변경할 수 있습니다.
        </UploadExplanation>
      </DropzoneWrapper>
    </Container>
  );
};
