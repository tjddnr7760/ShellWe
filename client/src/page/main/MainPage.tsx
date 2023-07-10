import React from 'react';
import { MainShellWrapper, MainShellImg } from './MainPage.styled';
import MainShellList from '../../component/mainshelllist/MainShellList';
import MainShell from '../../asset/mainshell.svg';

const MainPage: React.FC = () => {
  return (
    <MainShellWrapper>
      <div>
        <MainShellImg src={MainShell} alt="mainshell"></MainShellImg>
      </div>
      <MainShellList
        initialcategory="exampleCategory"
        initialshellpage="exampleShellPage"
      />
    </MainShellWrapper>
  );
};

export default MainPage;
