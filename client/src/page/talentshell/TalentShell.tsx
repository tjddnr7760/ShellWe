import ShellList from '../../component/shelllist/ShellList.tsx';
import { useResetRecoilStateOnUnmount } from '../../hooks/useResetRecoilStateOnUnmount';

const TalentShell = () => {
  useResetRecoilStateOnUnmount();

  return (
    <>
      <ShellList initialcategory="TALL" initialshellpage="talent" />
    </>
  );
};

export default TalentShell;
