import React from 'react';
import {
  MainShellWrapper,
  MainShellImg,
  ShellListContainer,
} from './MainPage.styled';
import MainShell from '../../asset/mainshell.svg';
import Shell from '../../common/shell/Shell.tsx';
import { useMainPageShells } from '../../hooks/shells/useMainPageShells.ts';
import { ShellType } from '../../common/shell/Shell.tsx';

const MainPage: React.FC = () => {
  const { data } = useMainPageShells();
  const mainShellsArray = data.data.shells;

  return (
    <MainShellWrapper>
      <div>
        <MainShellImg src={MainShell} alt="mainshell"></MainShellImg>
      </div>
      <ShellListContainer>
        {mainShellsArray &&
          mainShellsArray.map((shell: ShellType) => (
            <Shell key={shell.id} shell={shell} />
          ))}
      </ShellListContainer>
    </MainShellWrapper>
  );
};
export default MainPage;
