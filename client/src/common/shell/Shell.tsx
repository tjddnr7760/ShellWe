import { useState } from 'react';
import LikeDefaultShell from '../../asset/likeshells/LikeDefaultShell.svg';
import LikeSelectedShell from '../../asset/likeshells/LikeSelectedShell.svg';
import {
  ShellContainer,
  ShellImgWrapper,
  ShellImg,
  LikeShellIcon,
  ShellInfoWrapper,
  ShellTitleInfo,
} from './Shell.stlyled';
import Avatar from '../avatar/Avatar';
const Shell = ({ shell }: ShellProps) => {
  const [selecedShell, setSelecedShell] = useState(false);
  const handleLikeCilck = () => {
    setSelecedShell((prev) => !prev);
  };

  return (
    <ShellContainer>
      {shell && (
        <>
          <ShellImgWrapper>
            <ShellImg src={shell.picture} />
            <LikeShellIcon
              src={selecedShell ? LikeSelectedShell : LikeDefaultShell}
              onClick={handleLikeCilck}
            />
          </ShellImgWrapper>
          <ShellInfoWrapper>
            <Avatar avatartype="UserImg" member={shell.member} />

            <ShellTitleInfo>{shell.title}</ShellTitleInfo>
          </ShellInfoWrapper>
        </>
      )}
    </ShellContainer>
  );
};

export type ShellType = {
  id: number;
  type: string;
  status: string;
  title: string;
  createdAt: string;
  category: string;
  picture: string;
  member: {
    id: number;
    displayName: string;
    profileUrl: string;
  };
};
interface ShellProps {
  shell: ShellType; // ShellType은 적절한 타입으로 대체되어야 합니다.
}
export default Shell;
