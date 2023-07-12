import { MyShellContainer, ImgBox, Title, ShellInfo, ButtonDiv } from './MyShell.styled'
import { SmallButton3 } from '../../common/button/Button.styled.ts';
import Poke from '../../asset/poke.svg';

interface myShellProps {
  shellId: number;
  numberOfTrades: number;
  type: string;
  status: string;
  title: string;
  createdAt: string;
  modifiedAt: string;
  category: string;
  tags: string[];
  shellPhotos: string[];
  member: {
    memberId: number;
    displayName: string;
    profilePhoto: string;
  };
};

const MyShell = ({ shell }: { shell: myShellProps }) => {
  const picture = shell.shellPhotos[0];
  const title = shell.title;

  return (
    <MyShellContainer>
      <ShellInfo>
        <ImgBox src={picture} alt="shell-image" />
        <Title>{title}</Title>
      </ShellInfo>
      <SmallButton3>
        <ButtonDiv>
          <img src={Poke} alt="pokeicon" />
          <span>찌르기</span>
        </ButtonDiv>
      </SmallButton3>
    </MyShellContainer>
  );
};

export default MyShell;
