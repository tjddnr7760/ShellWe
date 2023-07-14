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

const ShellInfo = ({ shell }: { shell: MyShells }) => {
  return (
    <ShellInfoContainer>
      <ImageBox>
        <ShellImage src={shell.picture} />
      </ImageBox>
      <TextBox>{shell.title}</TextBox>
    </ShellInfoContainer>
  );
};

export default ShellInfo;
