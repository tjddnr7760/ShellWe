import styled from 'styled-components';
import MyShell from './MyShells.tsx';
import { MyShellDataProps } from '../../dataset/TypeOfMyShells.ts';

const MyShellListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: auto;
  padding: 10px;
  height: 100%;

  @media (max-width: 768px) {
    padding: 0px;
    min-height: 30px;
  }
`;

const MyShellsList = ({
  data,
  selectedTab,
}: {
  data: MyShellDataProps;
  selectedTab: string;
}) => {
  const myShellArray = data.shells;

  return (
    <MyShellListWrapper>
      {myShellArray &&
        myShellArray.map((shell) => {
          return (
            <MyShell key={shell.id} shell={shell} selectedTab={selectedTab} />
          );
        })}
    </MyShellListWrapper>
  );
};

export default MyShellsList;
