import styled from 'styled-components';
import { MyShellsDataProps, MyShells } from '../../dataset/ShellDetailType.ts';
import MyShell from './MyShell.tsx';

const MyShellListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 590px;
  height: 500px;
  padding-top: 25px;
  padding-bottom: 15px;
  overflow-y: scroll; /* Add scrollbar when content overflows */
`;

const MyShellList = ({ myShellsData }: MyShellsDataProps) => {
  // 문제: myShellsData를 props로 받아서 렌더링했는데 오류가 발생한다.
  const myShellArray = myShellsData;
  console.log(myShellArray);

  return (
    <MyShellListWrapper>
      {myShellArray.map((shell) => {
        return <MyShell key={shell.id} shell={shell} />;
      })}
    </MyShellListWrapper>
  );
};

export default MyShellList;
