import dummyData from '../../mock/mock';
import MyShells from './MyShells';
import { Container, Wrapper } from './MyShellsList.styled';

const MyShellsList = () => {
  //   const myShellArray = dummyData.shells.slice(0, 10);

  return (
    <Wrapper>
      <Container>
        <MyShells />
        <MyShells />
        <MyShells />
        <MyShells />
        <MyShells />
        <MyShells />
      </Container>
    </Wrapper>
  );
};

export default MyShellsList;
