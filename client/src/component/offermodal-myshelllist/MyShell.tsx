import { useParams } from 'react-router-dom';
import {
  MyShellContainer,
  ImgBox,
  Title,
  ShellInfo,
  ButtonDiv,
  PokeButton,
} from './MyShell.styled';
import { MyShells } from '../../dataset/TypeOfShellDetail.ts';
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
          <span>교환 요청하기</span>
        </ButtonDiv>
      </PokeButton>
    </MyShellContainer>
  );
};

export default MyShell;
