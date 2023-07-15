import {
  ShellInfoContainer,
  ImageBox,
  ShellImage,
  TextBox,
} from './ShellInfo.styled';

interface MyShells {
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
}
interface HandleClickedShellProps {
  HandleClickedShell: (shellId: number) => void;
}
const ShellInfo = ({
  shell,
  HandleClickedShell,
}: { shell: MyShells } & HandleClickedShellProps) => {
  const HandleClick = () => {
    HandleClickedShell(shell.id);
  };

  return (
    <ShellInfoContainer onClick={HandleClick}>
      <ImageBox>
        <ShellImage src={shell.picture} />
      </ImageBox>
      <TextBox>{shell.title}</TextBox>
    </ShellInfoContainer>
  );
};

export default ShellInfo;
