import { MyShellContainer, ImgBox, Title, ShellInfo } from './MyShell.styled';
import { Shells } from '../../dataset/TypeOfMyShells.ts';
import { useNavigate } from 'react-router';

const MyShell = ({ shell }: { shell: Shells }) => {
  const navigate = useNavigate();
  const goToShellDetail = () => {
    navigate(`/shelldetail/${shell.id}`);
  };

  return (
    <MyShellContainer onClick={goToShellDetail}>
      <ShellInfo>
        <ImgBox src={shell.picture} alt="shell-image" />
        <Title>{shell.title}</Title>
      </ShellInfo>
    </MyShellContainer>
  );
};

export default MyShell;
