import React, { useEffect } from 'react';
import { useSetRecoilState, useResetRecoilState } from 'recoil';
import ShellList from '../../component/shelllist/ShellList.tsx';
import { catagoryState, shellPageState } from '../../recoil/atom.ts';

const TalentShell = () => {
  const resetCatagoryState = useResetRecoilState(catagoryState);
  const resetShellPageState = useResetRecoilState(shellPageState);

  useEffect(() => {
    return () => {
      resetCatagoryState();
      resetShellPageState();
    };
  }, []);

  return (
    <>
      <ShellList
        initialcategory="TALL"
        initialshellpage="talent"
      />
    </>
  );
};

export default TalentShell;
