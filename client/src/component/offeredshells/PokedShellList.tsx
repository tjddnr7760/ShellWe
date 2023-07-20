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
}: MyPokedShellDataProps) => {
  const pokedShellsArray: PokedShells[] = myPokedShellsData.shells;

  return (
    <PokedShellListContainer>
      <IntroBox>
        <IntroText1>Poked Shell List</IntroText1>
        <IntroText2>Find great shells!</IntroText2>
      </IntroBox>
      <ShellInfoListContainer>
        {pokedShellsArray &&
          pokedShellsArray.map((shell) => {
            return (
              <ShellInfo
                key={shell.id}
                shell={shell}
                HandleClickPokedShell={HandleClickPokedShell}
              />
            );
          })}
      </ShellInfoListContainer>
    </PokedShellListContainer>
  );
};

export default PokedShellList;
