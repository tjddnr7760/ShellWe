import { useParams } from 'react-router-dom';
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
  const { id } = useParams();
  const numberTypeofsellerShellId = Number(id);
  const buyerShellId: number = shell.id;
  const sellerShellId: number = numberTypeofsellerShellId;

  const requestBodyForPoke = {
    buyerShellId: buyerShellId,
    sellerShellId: sellerShellId,
  };

  return (
    <MyShellContainer>
      <ShellInfo>
        <ImgBox src={shell.picture} alt="shell-image" />
        <Title>{shell.title}</Title>
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
