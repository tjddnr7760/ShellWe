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
import { usePokeShell } from '../../hooks/shelldetail/usePokeShell.ts';
import { RequestBodyForPoke } from '../../dataset/ShellDetailType';
import { getMemberIdFromLocalStorage } from '../../utill/localstorageData.ts';

const MyShell = ({ shell }: { shell: MyShells }) => {
  const { id } = useParams();
  const sellerShellId = Number(id);
  const buyerShellId: number = shell.id;
  const buyerMemberId = Number(getMemberIdFromLocalStorage());

  const requestBodyForPoke: RequestBodyForPoke = {
    buyerShellId: buyerShellId,
    sellerShellId: sellerShellId,
  };

  const { mutate: pokeShell } = usePokeShell(buyerMemberId, requestBodyForPoke);
  const PokeRequestHandler = () => {
    pokeShell();
  };

  return (
    <MyShellContainer>
      <ShellInfo>
        <ImgBox src={shell.picture} alt="shell-image" />
        <Title>{shell.title}</Title>
      </ShellInfo>
      <SmallButton3>
        <ButtonDiv onClick={PokeRequestHandler}>
          <img src={Poke} alt="pokeicon" />
          <span>찌르기</span>
        </ButtonDiv>
      </SmallButton3>
    </MyShellContainer>
  );
};

export default MyShell;
