import React, { useEffect, useState } from 'react';
import { FileWithPath } from 'react-dropzone';
import { ImageUploader } from '../imageuploader/ImageUploder';
import { useImageUpload } from '../../hooks/shells/useImageUpload';
interface UpdateImage {
  uploadedImages: File[];
  setUploadedImages: React.Dispatch<React.SetStateAction<FileWithPath[]>>;
  urls: string[];
}
export const UpdateImage = React.memo(function UpdateImage({
  uploadedImages,
  setUploadedImages,
  urls,
}: UpdateImage) {
  const ImagesDate = useImageUpload(urls);
  const [prevImagesDate, setPrevImagesDate] = useState<File[]>([]);
  const [uploadCount, setUploadCount] = useState(0);

  useEffect(() => {
    if (
      ImagesDate &&
      JSON.stringify(ImagesDate) !== JSON.stringify(prevImagesDate) &&
      uploadCount < 4
    ) {
      setUploadedImages(ImagesDate as File[]);
      setPrevImagesDate(ImagesDate as File[]);
      setUploadCount((count) => count + 1);
    }
  }, [ImagesDate, setUploadedImages, uploadCount]);

  return (
    <>
      <ImageUploader
        uploadedImages={uploadedImages}
        setUploadedImages={setUploadedImages}
      />
    </>
  );
});

UpdateImage.displayName = 'UpdateImage';
