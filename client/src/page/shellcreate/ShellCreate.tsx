import React, { useState } from 'react';
import { SmallButton6 } from '../../common/button/Button.styled.ts';
import CreateCateory from '../../component/createcateory/CreateCateory.js';
import {
  ShellCreateContainer,
  CreateTitleWrapper,
  CreateInput,
  CreateBodyWrapper,
  CreateBody,
  CreateImgContainer,
  CreateMainImgWrapper,
  CreateImgListWrapper,
  ButtonContainer,
  ShellCreatePage,
} from './ShellCreate.styled.js';
import Tag from '../../common/tag/Tag.js';
import { ImageUploader } from '../../component/imageuploader/ImageUploder.tsx';

const ShellCreate: React.FC = () => {
  const [uploadedImages, setUploadedImages] = useState<File[]>([]);
  const [category, setCategory] = useState<string>('');

  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === 'title') {
      setTitle(value);
    } else if (name === 'content') {
      setContent(value);
    }
  };

  const handleContentSubmit = async () => {
    try {
      const formData = new FormData();
      const register = {
        title: 'shell1',
        body: 'shell body',
        type: 'product',
        category: 'p_device',
        tags: ['laptop', 'Iphone'],
      };

      formData.append('register', JSON.stringify(register));
      uploadedImages.forEach((image) => {
        formData.append(`pictures `, image); // 이미지 파일 추가
      });

      // formData를 사용하여 서버로 데이터 전송
      // 필요한 로직을 작성해주세요
      console.log('서버로 전송:', formData);
    } catch (error) {
      console.error('전송 실패:', error);
    }
  };

  return (
    <ShellCreatePage>
      <ShellCreateContainer>
        <img src="/createLogo.svg" alt="createLogo" />
        <CreateCateory category={category} setCategory={setCategory} />
        <CreateTitleWrapper>
          <CreateInput
            value={title}
            onChange={handleInputChange}
            type="text"
            placeholder="제목을 입력하세요"
          />
        </CreateTitleWrapper>
        <CreateImgContainer>
          <CreateMainImgWrapper />
          <CreateImgListWrapper>
            <ImageUploader setUploadedImages={setUploadedImages} />
          </CreateImgListWrapper>
        </CreateImgContainer>

        <CreateBodyWrapper>
          <CreateBody
            value={content}
            onChange={handleInputChange}
            minRows={10}
            placeholder="내용을 입력하세요"
          />
        </CreateBodyWrapper>
        <Tag />
        <ButtonContainer>
          <SmallButton6 onClick={handleContentSubmit}>수정</SmallButton6>
        </ButtonContainer>
      </ShellCreateContainer>
    </ShellCreatePage>
  );
};

export default ShellCreate;
