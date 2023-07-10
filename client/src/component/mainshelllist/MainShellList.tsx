import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { shellPageState } from '../../recoil/atom.ts';
import LiftBtn from '../../common/liftbtn/LiftBtn.tsx';
import Shell from '../../common/shell/Shell.tsx';
import { ShellListContainer, ShellBox } from './MainShellList.styled.ts';

const MainShellList = ({ initialshellpage }: ShellListProps) => {
  const [shellPage, shellPageHandler] = useRecoilState<string>(shellPageState);

  useEffect(() => {
    shellPageHandler(initialshellpage);
  }, []);

  return (
    shellPage && (
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
    )
  );
};

export default MainShellList;
interface ShellListProps {
  initialcategory: string;
  initialshellpage: string;
}
