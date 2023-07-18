import {
  MyShellsContainer,
  ImgBox,
  ShellImg,
  ShellInfoBox,
  Text,
} from './MyShells.styled';
import example from '../../asset/example.png';

const MyShells = () => {
  return (
    <MyShellsContainer>
      <ImgBox>
        <ShellImg src={example} alt="Shells img"></ShellImg>
      </ImgBox>
      <ShellInfoBox>
        <Text className="title">title</Text>
        <Text className="category">category</Text>
      </ShellInfoBox>
    </MyShellsContainer>
  );
};

export default MyShells;
