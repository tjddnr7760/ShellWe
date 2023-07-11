import styled from 'styled-components';
import dummydata from '../../mock/mock.tsx';
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

const MyShellList = () => {
  const myShellArray = dummydata.shells.slice(0, 10);

  return (
    <MyShellListWrapper>
      {myShellArray.map((shell) => {
        return <MyShell key={shell.shellId} shell={shell} />;
      })}
    </MyShellListWrapper>
  );
};

export default MyShellList;
