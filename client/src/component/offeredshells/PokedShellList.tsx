import ShellInfo from './ShellInfo.tsx';
import {
  PokedShellListContainer,
  IntroBox,
  IntroText1,
  IntroText2,
  ShellInfoListContainer,
} from './PokedShellList.styled.ts';
import {
  MyPokedShellDataProps,
  PokedShells,
} from '../../dataset/TypesOfferedShell.ts';

const PokedShellList = ({
  myPokedShellsData,
  HandleClickPokedShell,
  clickedShellId,
}: MyPokedShellDataProps) => {
  const pokedShellsArray: PokedShells[] = myPokedShellsData.shells;

  return (
    <PokedShellListContainer>
      <IntroBox>
        <IntroText1>요청받은 나의 쉘 목록</IntroText1>
        <IntroText2>
          아래는 교환요청 받은 쉘 목록입니다.
          <br />
          쉘을 클릭해서 상대방이 요청한 쉘을 확인해보세요!
        </IntroText2>
      </IntroBox>
      <ShellInfoListContainer>
        {pokedShellsArray &&
          pokedShellsArray.map((shell) => {
            return (
              <ShellInfo
                key={shell.id}
                shell={shell}
                HandleClickPokedShell={HandleClickPokedShell}
                clickedShellId={clickedShellId}
              />
            );
          })}
      </ShellInfoListContainer>
    </PokedShellListContainer>
  );
};

export default PokedShellList;
