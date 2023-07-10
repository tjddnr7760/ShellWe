import ShellInfo from './ShellInfo.tsx';
import {
  PokedShellListContainer,
  IntroBox,
  IntroText1,
  IntroText2,
  ShellInfoListContainer,
} from './PokedShellList.styled.ts';

const PokedShellList = () => {
  return (
    <PokedShellListContainer>
      <IntroBox>
        <IntroText1>Poked Shell List</IntroText1>
        <IntroText2>Find great shells!</IntroText2>
      </IntroBox>
      <ShellInfoListContainer>
        <ShellInfo />
        <ShellInfo />
        <ShellInfo />
        <ShellInfo />
        <ShellInfo />
        <ShellInfo />
        <ShellInfo />
        <ShellInfo />
        <ShellInfo />
        <ShellInfo />
        <ShellInfo />
      </ShellInfoListContainer>
    </PokedShellListContainer>
  );
};

export default PokedShellList;
