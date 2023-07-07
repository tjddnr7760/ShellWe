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
} from './ShellCreate.styled.js';
import Tag from '../../common/tag/Tag.js';
const ShellCreate: React.FC = () => {
  return (
    <ShellCreateContainer>
      <CreateCateory />
      <CreateTitleWrapper>
        <CreateInput type="text" placeholder="제목을 입력하세요"></CreateInput>
      </CreateTitleWrapper>
      <CreateImgContainer>
        <CreateMainImgWrapper />
        <CreateImgImgListWrapper />
      </CreateImgContainer>

      <CreateBodyWrapper>
        <CreateBody minRows={10} placeholder="내용을 입력하세요" />
      </CreateBodyWrapper>
      <Tag />
      <SmallButton6>수정</SmallButton6>
    </ShellCreateContainer>
  );
};

export default ShellCreate;
