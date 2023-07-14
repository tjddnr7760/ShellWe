import { useDropzone } from 'react-dropzone';

export const ImageUploader = ({ setUploadedImages }) => {
    const handleImageUpload = async (acceptedFiles) => {
      const selectedFile = acceptedFiles[0];
      setUploadedImages((prevImages) => [...prevImages, selectedFile]);
      console.log('이미지 업로드 성공');
    };
  
    // ...
  
    const { getRootProps, getInputProps } = useDropzone({ onDrop: handleImageUpload });
  
    return (
      <div>
        {/* 이미지 렌더링 등의 코드 */}
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <p>이미지 파일을 드래그하거나 클릭하여 선택하세요.</p>
        </div>
        {/* 다른 버튼 또는 기능들 */}
      </div>
    );
  };
  
};
