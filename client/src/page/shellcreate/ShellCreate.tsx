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
  CreateImgImgListWrapper,
  ButtonContainer,
  ShellCreatePage,
} from './ShellCreate.styled.js';
import Tag from '../../common/tag/Tag.js';
const ShellCreate: React.FC = () => {
  return (
    <ShellCreatePage>
      <ShellCreateContainer>
        <img src="/createLogo.svg" alt="createLogo" />
        <CreateCateory />
        <CreateTitleWrapper>
          <CreateInput
            type="text"
            placeholder="제목을 입력하세요"
          ></CreateInput>
        </CreateTitleWrapper>
        <CreateImgContainer>
          <CreateMainImgWrapper />
          <CreateImgImgListWrapper />
        </CreateImgContainer>

        <CreateBodyWrapper>
          <CreateBody minRows={10} placeholder="내용을 입력하세요" />
        </CreateBodyWrapper>
        <Tag />
        <ButtonContainer>
          <SmallButton6>수정</SmallButton6>
        </ButtonContainer>
      </ShellCreateContainer>
    </ShellCreatePage>
  );
};

export default ShellCreate;
