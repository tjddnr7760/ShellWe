import {
  ShellInfoContainer,
  ImageBox,
  ShellImage,
  TextBox,
} from './ShellInfo.styled';
import { PokedShells } from '../../dataset/TypesOfferedShell';
import { HandleClickPokedShellProps } from '../../dataset/TypesOfferedShell';

const ShellInfo = ({
  shell,
  HandleClickPokedShell,
}: { shell: PokedShells } & HandleClickPokedShellProps) => {
  const ClickHandler = () => {
    HandleClickPokedShell(shell.id);
  };

  return (
    <ShellInfoContainer onClick={ClickHandler}>
      <ImageBox>
        <ShellImage src={shell.picture} />
      </ImageBox>
      <TextBox>{shell.title}</TextBox>
    </ShellInfoContainer>
  );
};

export default ShellInfo;
