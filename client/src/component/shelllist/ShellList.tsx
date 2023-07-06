import React, { useState, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import CategoryList from '../categorylist/CategoryList.tsx';
import {
  CategoryListWrapper,
  ShellListContainer,
  SeachToolbarWrapper,
  ShellsWrapper,
} from './ShellList.styled.ts';
import { catagoryState, shellPageState } from '../../recoil/atom.ts';

const ShellList = ({ initialcategory, initialshellpage }: ShellListProps) => {
  const catagoryTypeHandler = useSetRecoilState<string>(catagoryState);
  const shellPageHandler = useSetRecoilState<string>(shellPageState);

  useEffect(() => {
    catagoryTypeHandler(initialcategory);
    shellPageHandler(initialshellpage);
  }, []);

  return (
    <ShellListContainer>
      <SeachToolbarWrapper>
        <div>1111</div>
      </SeachToolbarWrapper>
      <CategoryListWrapper>
        <CategoryList />
      </CategoryListWrapper>
      <ShellsWrapper></ShellsWrapper>
    </ShellListContainer>
  );
};

export default ShellList;
interface ShellListProps {
  initialcategory: string;
  initialshellpage: string;
}
