import styled from 'styled-components';

const MyShellsPageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  justify-content: center;
`;

const MyShellsPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 735px;
  height: fit-content;
  gap: 10px;
  padding: 35px;
`;

export { MyShellsPageWrapper, MyShellsPageContainer };
