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

interface MyShells {
  id: number;
  type: string;
  status: string;
  title: string;
  body?: string;
  createdAt: string;
  category: string;
  pictures?: Picture[];
  member: {
    id: number;
    displayName: string;
    profileUrl: string;
  };
}

interface Picture {
  order: number;
  url: string;
}

const ResponseShell = ({
  shell,
  clickedShellId,
}: {
  shell: MyShells;
  clickedShellId: number;
}) => {
  const { mutate: acceptShell } = useAcceptShell();

  const requestBodyForAccept = {
    myShellId: shell.id,
    sellerShellId: clickedShellId,
    sellerMemberId: 1, // sellerMemberId -> recoil 현재 로그인된 memberId
  };

  const AcceptHandler = () => {
    acceptShell(requestBodyForAccept);
  };

  // shelldetail 머지 시, (body, 글자 제한)을 인자로 두고, 함수 재사용.
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

  return (
    <ResponseShellWrapper>
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
