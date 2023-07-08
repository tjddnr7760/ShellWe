import React, { useState, useEffect } from 'react';
import { useSetRecoilState, useRecoilState } from 'recoil';
import CategoryList from '../categorylist/CategoryList.tsx';
import {
  CategoryListWrapper,
  ShellListContainer,
  SeachToolbarWrapper,
  ShellsWrapper,
} from './ShellList.styled.ts';
import { catagoryState, shellPageState } from '../../recoil/atom.ts';
import SearchToolbar from '../searchtoolbar/SearchToolbar.tsx';
import LiftBtn from '../../common/liftbtn/LiftBtn.tsx';
import Shell from '../../common/shell/Shell.tsx';

const ShellList = ({ initialcategory, initialshellpage }: ShellListProps) => {
  const catagoryTypeHandler = useSetRecoilState<string>(catagoryState);
  const [shellPage, shellPageHandler] = useRecoilState<string>(shellPageState);

  useEffect(() => {
    catagoryTypeHandler(initialcategory);
    shellPageHandler(initialshellpage);
  }, []);

  return (
    shellPage && (
      <ShellListContainer>
        <SeachToolbarWrapper>
          <SearchToolbar />
        </SeachToolbarWrapper>
        <CategoryListWrapper>
          <CategoryList />
        </CategoryListWrapper>
        <ShellsWrapper>
          <Shell /> <Shell />
          <Shell />
          <Shell />
          <Shell />
          <Shell />
          <Shell />
          <Shell />
          <Shell />
        </ShellsWrapper>
        <LiftBtn />
      </ShellListContainer>
    )
  );
};

export default ShellList;
interface ShellListProps {
  initialcategory: string;
  initialshellpage: string;
}
