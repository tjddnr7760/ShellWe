import styled from 'styled-components';
import MyShells from './MyShells';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-height: 700px;
  gap: 20px;
  width: auto;
  overflow-y: scroll;
  padding: 5px;
`;

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
