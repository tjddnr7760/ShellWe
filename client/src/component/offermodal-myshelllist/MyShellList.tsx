import styled from 'styled-components';
import MyShell from './MyShell.tsx';
import { MyShellDataProps } from '../../dataset/TypeOfMyShells.ts';

const MyShellListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 590px;
  height: 500px;
  padding-top: 25px;
  padding-bottom: 15px;
  overflow-y: scroll;
`;

const MyShellList = ({ data }: { data: MyShellDataProps }) => {
  const myShellArray = data.shells;

  return (
    <MyShellListWrapper>
      {myShellArray.map((shell) => {
        return <MyShell key={shell.id} shell={shell} />;
      })}
    </MyShellListWrapper>
  );
};

export default MyShellList;
