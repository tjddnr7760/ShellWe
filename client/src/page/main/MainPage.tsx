import React from 'react';
import {
  MainShellWrapper,
  MainShellImg,
  ShellListContainer,
  ShellBox,
} from './MainPage.styled';
import LiftBtn from '../../common/liftbtn/LiftBtn.tsx';
import MainShell from '../../asset/mainshell.svg';
import Shell from '../../common/shell/Shell.tsx';

const MainPage: React.FC = () => {
  return (
    <MainShellWrapper>
      <div>
        <MainShellImg src={MainShell} alt="mainshell"></MainShellImg>
      </div>
      <ShellListContainer>
        <ShellBox>
          <Shell />
          <Shell />
          <Shell />
          <Shell />
        </ShellBox>
        <ShellBox>
          <Shell />
          <Shell />
          <Shell />
          <Shell />
        </ShellBox>
        <LiftBtn />
      </ShellListContainer>
    </MainShellWrapper>
  );
};

export default MainPage;
