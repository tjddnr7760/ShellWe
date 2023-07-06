import ShellList from '../../component/shelllist/ShellList.tsx';
import { useResetRecoilStateOnUnmount } from '../../hooks/useResetRecoilStateOnUnmount';

const ProductShell = () => {
  useResetRecoilStateOnUnmount();

  return (
    <>
      <ShellList initialcategory="PALL" initialshellpage="product" />
    </>
  );
};

export default ProductShell;
