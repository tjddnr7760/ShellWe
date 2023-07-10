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
const Shell = () => {
  const [selecedShell, setSelecedShell] = useState(false);

  const handleLikeCilck = () => {
    setSelecedShell((prev) => !prev);
  };

  return (
    <ShellContainer>
      <ShellImgWrapper>
        <ShellImg src="/dummyimg.svg" />
        <LikeShellIcon
          src={selecedShell ? LikeSelectedShell : LikeDefaultShell}
          onClick={handleLikeCilck}
        />
      </ShellImgWrapper>
      <ShellInfoWrapper>
        <Avatar avatartype="UserImg" />
        <ShellTitleInfo>제목목제목제</ShellTitleInfo>
      </ShellInfoWrapper>
    </ShellContainer>
  );
};

export default Shell;
