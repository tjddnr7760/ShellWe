import { useMediaQuery } from 'react-responsive';
import {
  ResponseShellWrapper,
  ShellsImageBox,
  ShellImg,
  ShellsTextInfoBox,
  BodyBox,
  AcceptInfo,
  AcceptButton,
  TitleBox,
  CategoryBox,
} from './ResponseShell.styled';
import { useAcceptShell } from '../../hooks/offer/useAccept';
import { OfferedShells } from '../../dataset/TypesOfferedShell';
import { Pictures } from '../../dataset/TypesOfferedShell';
import { MakePartOfBodyText } from '../../utill/makeBodyText';
import Avatar from '../../common/avatar/Avatar';

const ResponseShell = ({
  shell,
  clickedShellId,
  HandleShellPreview,
}: {
  shell: OfferedShells;
  clickedShellId: number;
  HandleShellPreview: (picture: Pictures[]) => void;
}) => {
  const isMobileScreen = useMediaQuery({ maxWidth: 768 });
  const { mutate: acceptShell } = useAcceptShell();
  const requestBodyForAccept = {
    myShellId: clickedShellId,
    sellerShellId: shell.id,
    sellerMemberId: shell.member.id,
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
        <TitleBox>{shell.title}</TitleBox>
        <CategoryBox>{shell.category.slice(2).toUpperCase()}</CategoryBox>
        {isMobileScreen ? null : (
          <BodyBox>{MakePartOfBodyText(shell.body || '', 123)}</BodyBox>
        )}
      </ShellsTextInfoBox>
      <AcceptInfo>
        <Avatar avatartype="UserImg" member={shell.member} />
        <AcceptButton onClick={AcceptHandler}>수락</AcceptButton>
      </AcceptInfo>
    </ResponseShellWrapper>
  );
};

export default ResponseShell;
