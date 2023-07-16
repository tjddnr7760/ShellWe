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
} from './ImageUploder.styled';
interface ImageUploaderProps {
  uploadedImages: File[];
  setUploadedImages: React.Dispatch<React.SetStateAction<FileWithPath[]>>;
}

export const ImageUploader = ({
  uploadedImages,
  setUploadedImages,
}: ImageUploaderProps) => {
  const [uploadedPreviewImages, setUploadedPreviewImages] = useState<string[]>(
    []
  );

  const handleImageUpload = async (acceptedFiles: FileWithPath[]) => {
    const selectedFile = acceptedFiles[0];

    // 이미지가 중복되는지 확인
    const isDuplicate = uploadedImages.some((image) =>
      compareFiles(image, selectedFile)
    );
    if (isDuplicate) {
      return;
    }

    setUploadedImages((prevImages: FileWithPath[]) => [
      ...prevImages,
      selectedFile,
    ]);

    // 이미지 미리보기 생성
    const objectUrl = URL.createObjectURL(selectedFile);
    setUploadedPreviewImages((prevPreviewImages: string[]) => [
      ...prevPreviewImages,
      objectUrl,
    ]);
  };

  const handleImageDelete = (index: number) => {
    setUploadedImages((prevImages: FileWithPath[]) => {
      const updatedImages = [...prevImages];
      updatedImages.splice(index, 1);
      return updatedImages;
    });

    setUploadedPreviewImages((prevPreviewImages: string[]) => {
      const updatedPreviewImages = [...prevPreviewImages];
      updatedPreviewImages.splice(index, 1);
      return updatedPreviewImages;
    });
  };

  const handleTitleImageChange = (index: number) => {
    if (index === 0) {
      return; // 0번 인덱스는 예외 처리
    }

    setUploadedImages((prevImages: FileWithPath[]) => {
      const updatedImages = moveItemToStart<FileWithPath>(prevImages, index);
      return updatedImages;
    });

    setUploadedPreviewImages((prevPreviewImages: string[]) => {
      const updatedPreviewImages = moveItemToStart<string>(
        prevPreviewImages,
        index
      );
      return updatedPreviewImages;
    });
  };

  const { getRootProps } = useDropzone({
    onDrop: handleImageUpload,
    noClick: true,
  });

  return (
    <Container {...getRootProps()}>
      <DropzoneWrapper>
        <UploadZone>
          {uploadedPreviewImages[0] ? (
            uploadedPreviewImages.map((image, index) => (
              <UploadedImageWrapper key={index}>
                <UploadedImage
                  src={image}
                  alt={`Preview ${index}`}
                  onClick={() => handleTitleImageChange(index)}
                />
                <DeleteButton onClick={() => handleImageDelete(index)}>
                  X
                </DeleteButton>
              </UploadedImageWrapper>
            ))
          ) : (
            <div>이미지를 올려주세요</div>
          )}
        </UploadZone>
      </DropzoneWrapper>
    </Container>
  );
};
