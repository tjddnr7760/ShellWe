import React from 'react';
import {
  MainShellWrapper,
  MainShellImg,
  ShellListContainer,
  MainShellText,
} from './MainPage.styled';
import MainShell from '../../asset/mainshell.svg';
import Shell from '../../common/shell/Shell.tsx';
import { useMainPageShells } from '../../hooks/shells/useMainPageShells.ts';
import { ShellType } from '../../common/shell/Shell.tsx';

const MainPage: React.FC = () => {
  const { data } = useMainPageShells();

  return (
    <MainShellWrapper>
      <div>
        <MainShellImg src={MainShell} alt="mainshell"></MainShellImg>
      </div>
      <MainShellText>Today Shell!!!</MainShellText>
      <ShellListContainer>
        {data &&
          data.data?.shells.map((shell: ShellType) => (
            <Shell key={shell.id} shell={shell} />
          ))}
      </ShellListContainer>
    </MainShellWrapper>
  );
};
export default MainPage;
