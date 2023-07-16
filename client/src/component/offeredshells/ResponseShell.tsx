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
  HandleShellPreview,
}: {
  shell: MyShells;
  clickedShellId: number;
  HandleShellPreview: any;
}) => {
  // mutation 호출
  const { mutate: acceptShell } = useAcceptShell();
  // request body
  const requestBodyForAccept = {
    myShellId: clickedShellId,
    sellerShellId: shell.id,
    sellerMemberId: shell.member.id,
  };
  // mutation handler
  const AcceptHandler = () => {
    acceptShell(requestBodyForAccept);
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
  // 미리보기 상태에 사진 저장
  const HandlePreview = () => {
    console.log(shell.id);
    console.log(shell.pictures);
    HandleShellPreview(shell.pictures);
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
