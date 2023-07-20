import {
  ResponseShellWrapper,
  ShellsImageBox,
  ShellImg,
  ShellsTextInfoBox,
  TextBox,
  BodyBox,
  AcceptInfo,
  UserImg,
  AcceptButton,
} from './ResponseShell.styled';
import { useAcceptShell } from '../../hooks/offer/useAccept';
import { OfferedShells } from '../../dataset/TypesOfferedShell';
import { Pictures } from '../../dataset/TypesOfferedShell';

const ResponseShell = ({
  shell,
  clickedShellId,
  HandleShellPreview,
}: {
  shell: OfferedShells;
  clickedShellId: number;
  HandleShellPreview: (picture: Pictures[]) => void;
}) => {
  const { mutate: acceptShell } = useAcceptShell();
  const requestBodyForAccept = {
    myShellId: clickedShellId,
    sellerShellId: shell.id,
    sellerMemberId: shell.member.id,
  };

  // shelldetailpage, offeredpage 머지 시, 함수 재사용.
  const MakePartOfBodyText = (body: string) => {
    if (body.length < 123) {
      return body;
    } else {
      const slicebody = body.slice(0, 123);
      return slicebody.charAt(slicebody.length - 1) === '.'
        ? slicebody + '.'
        : slicebody + '..';
    }
  };

  const HandlePreview = () => {
    shell.pictures && HandleShellPreview(shell.pictures);
  };

  const AcceptHandler = () => {
    acceptShell(requestBodyForAccept);
  };

  return (
    <ResponseShellWrapper onClick={HandlePreview}>
      <ShellsImageBox>
        <ShellImg
          src={shell.pictures && shell.pictures[0]?.url}
          alt="shellpicture"
        ></ShellImg>
      </ShellsImageBox>
      <ShellsTextInfoBox>
        <TextBox>{shell.title}</TextBox>
        <TextBox>{shell.category}</TextBox>
        <BodyBox>{MakePartOfBodyText(shell.body || '')}</BodyBox>
      </ShellsTextInfoBox>
      <AcceptInfo>
        <UserImg src={shell.member.profileUrl} alt="userimg"></UserImg>
        <AcceptButton onClick={AcceptHandler}>수락</AcceptButton>
      </AcceptInfo>
    </ResponseShellWrapper>
  );
};

export default ResponseShell;
