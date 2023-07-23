import styled from 'styled-components';
import { MyShellsDataProps } from '../../dataset/TypeOfShellDetail.ts';
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

  @media (max-width: 768px) {
    width: 300px;
    height: 500px;
  }
`;

const MyShellList = ({
  myShellListsData,
  shellMemberId,
  handlePoke,
}: MyShellsDataProps) => {
  const myShellArray = myShellListsData;

  return (
    <MyShellListWrapper>
      {myShellArray.map((shell) => {
        return (
          <MyShell
            key={shell.id}
            shell={shell}
            shellMemberId={shellMemberId}
            handlePoke={handlePoke}
          />
        );
      })}
    </MyShellListWrapper>
  );
};

export default MyShellList;
