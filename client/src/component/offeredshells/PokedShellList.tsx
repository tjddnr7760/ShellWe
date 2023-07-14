import ShellInfo from './ShellInfo.tsx';
import {
  PokedShellListContainer,
  IntroBox,
  IntroText1,
  IntroText2,
  ShellInfoListContainer,
} from './PokedShellList.styled.ts';

interface MyPokedShellDataProps {
  myPokedShellsData: ShellsList;
}

interface ShellsList {
  shells: MyShells[];
}

interface MyShells {
  id: number;
  type: string;
  status: string;
  title: string;
  createdAt: string;
  category: string;
  picture: string;
  member: {
    id: number;
    displayName: string;
    profileUrl: string;
  };
}

const PokedShellList = ({ myPokedShellsData }: MyPokedShellDataProps) => {
  console.log(myPokedShellsData);
  const pokedShellsArray: MyShells[] = myPokedShellsData.shells;

  return (
    <PokedShellListContainer>
      <IntroBox>
        <IntroText1>Poked Shell List</IntroText1>
        <IntroText2>Find great shells!</IntroText2>
      </IntroBox>
      <ShellInfoListContainer>
        {pokedShellsArray.map((shell) => {
          return <ShellInfo key={shell.id} shell={shell} />;
        })}
      </ShellInfoListContainer>
    </PokedShellListContainer>
  );
};

export default PokedShellList;
