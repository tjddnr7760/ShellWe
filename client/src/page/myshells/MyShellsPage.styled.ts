import styled from 'styled-components';

const MyShellsPageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const MyShellsPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1150px;
  height: fit-content;
  gap: 10px;
  padding: 35px;
`;

export { MyShellsPageWrapper, MyShellsPageContainer };
