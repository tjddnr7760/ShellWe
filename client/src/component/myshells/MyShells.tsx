import { Container, ImgBox, ShellImg, ShellInfoBox , Text} from "./MyShells.styled";
import example from '../../asset/example.png'

const MyShells = () => {
  return (
    <Container>
      <ImgBox>
        <ShellImg src={example} alt="Shells img"></ShellImg>
      </ImgBox>
      <ShellInfoBox>
        <Text>title</Text>
        <Text>category</Text>
      </ShellInfoBox>
    </Container>
  );
};

export default MyShells;
