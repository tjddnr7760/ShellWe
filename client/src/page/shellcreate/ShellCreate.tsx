import React, { useState } from 'react';

import CreateCateory from '../../component/createcateory/CreateCateory.js';
import {
  ShellCreateContainer,
  CreateTitleWrapper,
  CreateInput,
  CreateBodyWrapper,
  CreateBody,
} from './ShellCreate.styled.js';
import Tag from '../../common/tag/Tag.js';
const ShellCreate = () => {
  return (
    <ShellCreateContainer>
      <CreateCateory />
      <CreateTitleWrapper>
        <CreateInput type="text" placeholder="제목을 입력하세요"></CreateInput>
      </CreateTitleWrapper>
      <div></div>
      <div></div>

      <CreateBodyWrapper>
        <CreateBody minRows={10} placeholder="내용을 입력하세요" />
      </CreateBodyWrapper>
      <Tag />
    </ShellCreateContainer>
  );
};

export default ShellCreate;
