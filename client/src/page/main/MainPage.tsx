import React from 'react';
import {
  MainShellWrapper,
  MainShellImg,
  ShellListContainer,
} from './MainPage.styled';
import MainShell from '../../asset/mainshell.svg';
import Shell from '../../common/shell/Shell.tsx';

const MainPage: React.FC = () => {
  return (
    <MainShellWrapper>
      <div>
        <MainShellImg src={MainShell} alt="mainshell"></MainShellImg>
      </div>
        <ShellListContainer>
          <Shell />
          <Shell />
          <Shell />
          <Shell />
          <Shell />
          <Shell />
          <Shell />
          <Shell />
        </ShellListContainer>
    </MainShellWrapper>
  );
}
export default MainPage;
