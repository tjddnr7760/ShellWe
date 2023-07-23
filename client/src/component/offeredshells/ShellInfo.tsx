import { useState } from 'react';
import {
  ShellInfoContainer,
  ImageBox,
  ShellImage,
  TextBox,
  ImageContainer,
} from './ShellInfo.styled';
import { ClickedShellId, PokedShells } from '../../dataset/TypesOfferedShell';
import { HandleClickPokedShellProps } from '../../dataset/TypesOfferedShell';

const ShellInfo = ({
  shell,
  HandleClickPokedShell,
  clickedShellId,
}: { shell: PokedShells } & HandleClickPokedShellProps & ClickedShellId) => {
  const [clickedShell, setClickedShell] = useState(false);

  const ClickHandler = () => {
    HandleClickPokedShell(shell.id);
    setClickedShell(!clickedShell);
  };

  return (
    <ShellInfoContainer
      onClick={ClickHandler}
      style={{
        backgroundColor:
          shell.id === clickedShellId
            ? 'rgba(202, 240, 248, 0.15)'
            : 'transparent',
      }}
    >
      <ImageContainer>
        <ImageBox>
          <ShellImage src={shell.picture} />
        </ImageBox>
      </ImageContainer>
      <TextBox>{shell.title}</TextBox>
    </ShellInfoContainer>
  );
};

export default ShellInfo;
