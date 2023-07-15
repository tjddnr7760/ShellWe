import { FileWithPath, useDropzone } from 'react-dropzone';
interface ImageUploaderProps {
  setUploadedImages: React.Dispatch<React.SetStateAction<FileWithPath[]>>;
}

export const ImageUploader = ({ setUploadedImages }: ImageUploaderProps) => {
  const handleImageUpload = async (acceptedFiles: FileWithPath[]) => {
    const selectedFile = acceptedFiles[0];
    setUploadedImages((prevImages: FileWithPath[]) => [
      ...prevImages,
      selectedFile,
    ]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: handleImageUpload,
  });

  return (
    <div>
      {/* 이미지 렌더링 등의 코드 */}
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p>이미지 파일</p>
      </div>
      {/* 다른 버튼 또는 기능들 */}
    </div>
  );
};
