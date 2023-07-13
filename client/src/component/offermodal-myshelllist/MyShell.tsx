import {
  MyShellContainer,
  ImgBox,
  Title,
  ShellInfo,
  ButtonDiv,
} from './MyShell.styled';
import { SmallButton3 } from '../../common/button/Button.styled.ts';
import { MyShells } from '../../dataset/ShellDetailType.ts';
import Poke from '../../asset/poke.svg';

const MyShell = ({ shell }: { shell: MyShells }) => {
  const picture = shell.picture;
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
