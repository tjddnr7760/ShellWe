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

const MyShell = ({ shell }: { shell: MyShells }) => {
  // useParams로 id를 받기 때문에,
  // 제품 리스트 페이지에서 제품 상세 페이지로, navigate할 때,
  // 쉘 id를 url의 id로 참조하는지 확인해야 한다.
  const { id } = useParams();
  const sellerShellId = Number(id);
  const buyerShellId: number = shell.id;
  // 수정 필요. buyerMemberId에 recoil login 상태의 memberId 할당.
  const buyerMemberId = 1;

  const requestBodyForPoke: RequestBodyForPoke = {
    buyerShellId: buyerShellId,
    sellerShellId: sellerShellId,
  };

  const { mutate: pokeShell } = usePokeShell(buyerMemberId);
  const PokeRequestHandler = () => {
    pokeShell(requestBodyForPoke);
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
