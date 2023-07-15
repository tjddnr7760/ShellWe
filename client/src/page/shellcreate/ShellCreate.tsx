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
  TitleImg,
  Logo,
  LogoWrapper,
} from './ShellCreate.styled.js';
import Tag from '../../common/tag/Tag.js';
import { ImageUploader } from '../../component/imageuploader/ImageUploder.tsx';
import { useCreateShells } from '../../hooks/shells/useCreateShells.ts';

const ShellCreate: React.FC = () => {
  const [uploadedImages, setUploadedImages] = useState<File[]>([]);
  const [selectedCateory, setSelectedCateory] = useState({
    name: '카테고리',
    categoryid: '',
    type: '',
  });
  const formData = new FormData();
  const { mutate } = useCreateShells();

  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [tagList, setTagList] = useState<string[]>([]);

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
    const register = {
      title: title,
      body: content,
      type: selectedCateory.type,
      category: selectedCateory.categoryid,
      tags: tagList,
    };

    formData.append('register', JSON.stringify(register));
    uploadedImages.forEach((image) => {
      formData.append(`pictures `, image); // 이미지 파일 추가
    });
    mutate(formData);
  };
  return (
    <ShellCreatePage>
      <ShellCreateContainer>
        <LogoWrapper>
          <Logo src="/createLogo.svg" alt="createLogo" />
        </LogoWrapper>
        <CreateCateory
          selectedCateory={selectedCateory}
          setSelectedCateory={setSelectedCateory}
        />
        <CreateTitleWrapper>
          <CreateInput
            value={title}
            onChange={handleInputChange}
            type="text"
            placeholder="제목을 입력하세요"
          />
        </CreateTitleWrapper>
        <CreateImgContainer>
          <CreateMainImgWrapper>
            {uploadedImages[0] && (
              <TitleImg
                src={URL.createObjectURL(uploadedImages[0])}
                alt="title_img"
              />
            )}
          </CreateMainImgWrapper>
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
        <Tag tagList={tagList} setTagList={setTagList} />
        <ButtonContainer>
          <SmallButton6 onClick={handleContentSubmit}>수정</SmallButton6>
        </ButtonContainer>
      </ShellCreateContainer>
    </ShellCreatePage>
  );
};

export default ShellCreate;
