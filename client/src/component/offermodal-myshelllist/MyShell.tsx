import {
  MyShellContainer,
  ImgBox,
  Title,
  ShellInfo,
  Category,
} from './MyShell.styled';
import { Shells } from '../../dataset/TypeOfMyShells.ts';
import { useNavigate } from 'react-router';
import { SmallButton3 } from '../../common/button/Button.styled.ts';

const MyShell = ({ shell }: { shell: Shells }) => {
  const navigate = useNavigate();
  const goToShellDetail = () => {
    navigate(`/shelldetail/${shell.id}`);
  };

  return (
    <MyShellContainer>
      <ShellInfo>
        <ImgBox src={shell.picture} alt="shell-image" />
        <div>
          <Title>{shell.title}</Title>
          <Category>{shell.category}</Category>
        </div>
      </ShellInfo>
      <div>
        <SmallButton3 onClick={goToShellDetail}>Detail</SmallButton3>
      </div>
    </MyShellContainer>
  );
};

export default MyShell;
