import React, { useEffect } from "react";
import { useSetRecoilState, useResetRecoilState } from "recoil";
import ShellList from "../../component/shelllist/ShellList.tsx";
import { catagoryState, shellPageState } from "../../recoil/atom.ts";

const ProductShell = () => {
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
      <ShellList initialcategory="PALL" initialshellpage="product" />
    </>
  );
};

export default ProductShell;
