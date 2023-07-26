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
  TitleExplanation,
  TitleImgWrapper,
} from './ShellCreate.styled.js';
import Tag from '../../common/tag/Tag.js';
import { ImageUploader } from '../../component/imageuploader/ImageUploder.tsx';
import { useCreateShells } from '../../hooks/shells/useCreateShells.ts';

const ShellCreate = () => {
  const [selectedCateory, setSelectedCateory] = useState({
    name: '카테고리',
    categoryid: '',
    type: '',
  });
  const formData = new FormData();
  const { mutate: handleCreateMutate } = useCreateShells();

  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [tagList, setTagList] = useState<string[]>([]);
  const [uploadedImages, setUploadedImages] = useState<File[]>([]);

  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    if (e.target instanceof HTMLInputElement && e.target.value.length <= 20) {
      setTitle(e.target.value);
    } else if (
      e.target instanceof HTMLTextAreaElement &&
      e.target.value.length <= 1500
    ) {
      setContent(e.target.value);
    }
  };

  const handleContentSubmit = async () => {
    if (
      !title ||
      !content ||
      !selectedCateory.categoryid ||
      !tagList.length ||
      !uploadedImages.length
    ) {
      alert(
        '모든 항목을 채워주세요.\n태그 작성 시, 엔터를 누르셔야 태그 박스가 생성됩니다!'
      );
      return;
    }
    const register = {
      title: title,
      body: content,
      type: selectedCateory.type,
      category: selectedCateory.categoryid,
      tags: tagList,
    };

    formData.append(
      'register',
      new Blob([JSON.stringify(register)], { type: 'application/json' })
    );
    uploadedImages.forEach((image) => {
      formData.append(`pictures `, image); // 이미지 파일 추가
    });

    handleCreateMutate(formData);
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
            <TitleImgWrapper>
              {uploadedImages[0] ? (
                <TitleImg
                  src={URL.createObjectURL(uploadedImages[0])}
                  alt="title_img"
                />
              ) : null}
            </TitleImgWrapper>
            <TitleExplanation>
              물건이 명확하게 보이거나 자신의 재능을 표현할 수 있는 사진을
              올려주세요
            </TitleExplanation>
          </CreateMainImgWrapper>
          <CreateImgListWrapper>
            <ImageUploader
              uploadedImages={uploadedImages}
              setUploadedImages={setUploadedImages}
            />
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
          <SmallButton6 onClick={handleContentSubmit}>등록</SmallButton6>
        </ButtonContainer>
      </ShellCreateContainer>
    </ShellCreatePage>
  );
};

export default ShellCreate;
