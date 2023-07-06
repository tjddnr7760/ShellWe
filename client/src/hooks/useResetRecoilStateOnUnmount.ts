import { useEffect } from 'react';
import { useResetRecoilState } from 'recoil';
import { catagoryState, shellPageState } from '../recoil/atom.ts';

export const useResetRecoilStateOnUnmount = () => {
  const resetCatagoryState = useResetRecoilState(catagoryState);
  const resetShellPageState = useResetRecoilState(shellPageState);
  useEffect(() => {
    return () => {
      resetCatagoryState();
      resetShellPageState();
    };
  }, [resetShellPageState, resetCatagoryState]);
};
