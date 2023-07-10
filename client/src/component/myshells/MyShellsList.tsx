import dummyData from '../../mock/mock';
import MyShells from './MyShells';
import { Wrapper } from './MyShellsList.styled';

const MyShellsList = () => {
  //   const myShellArray = dummyData.shells.slice(0, 10);

  return (
    <Wrapper>
        <MyShells />
        <MyShells />
        <MyShells />
        <MyShells />
        <MyShells />
        <MyShells />
        <MyShells />
        <MyShells />
        <MyShells />
    </Wrapper>
  );
};

export default MyShellsList;
