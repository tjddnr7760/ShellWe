import { useParams } from 'react-router-dom';
import {
  MyShellContainer,
  ImgBox,
  Title,
  ShellInfo,
  ButtonDiv,
  PokeButton,
  PokeImage,
} from './MyShell.styled';
import { MyShells } from '../../dataset/TypeOfShellDetail.ts';
import Poke from '../../asset/poke.svg';
import { usePokeShell } from '../../hooks/shelldetail/usePokeShell.ts';
import { RequestBodyForPoke } from '../../dataset/TypeOfShellDetail.ts';
const MyShell = ({
  shell,
  shellMemberId,
  handlePoke,
}: {
  shell: MyShells;
  shellMemberId: number;
  handlePoke: () => void;
}) => {
  const { id } = useParams();
  const sellerShellId = Number(id);
  const buyerShellId: number = shell.id;
  const sellerMemberId = shellMemberId;

  const requestBodyForPoke: RequestBodyForPoke = {
    buyerShellId: buyerShellId,
    sellerShellId: sellerShellId,
  };

  const { mutate: pokeShell } = usePokeShell(
    sellerMemberId,
    requestBodyForPoke
  );
  const PokeRequestHandler = () => {
    pokeShell();
    handlePoke();
  };

  return (
    <MyShellContainer>
      <ShellInfo>
        <ImgBox src={shell.picture} alt="shell-image" />
        <Title>{shell.title}</Title>
      </ShellInfo>
      <PokeButton>
        <ButtonDiv onClick={PokeRequestHandler}>
          <PokeImage src={Poke} alt="pokeicon" />
          <span>찌르기</span>
        </ButtonDiv>
      </PokeButton>
    </MyShellContainer>
  );
};

export default MyShell;
