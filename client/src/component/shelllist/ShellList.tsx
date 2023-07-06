import React, { useState, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import CategoryList from '../categorylist/CategoryList.tsx';
import { CategoryListWrapper } from './ShellList.styled.ts';
import { catagoryState, shellPageState } from '../../recoil/atom.ts';

interface ShellListProps {
  initialcategory: string;
  initialshellpage: string;
}

const ShellList = ({ initialcategory, initialshellpage }: ShellListProps) => {
  const catagoryTypeHandler = useSetRecoilState<string>(catagoryState);
  const shellPageHandler = useSetRecoilState<string>(shellPageState);

  useEffect(() => {
    catagoryTypeHandler(initialcategory);
    shellPageHandler(initialshellpage);
  }, []);

  return (
    <CategoryListWrapper>
      <CategoryList />
    </CategoryListWrapper>
  );
};

export default ShellList;
