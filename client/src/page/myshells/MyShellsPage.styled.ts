import styled from 'styled-components';

const MyShellsPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 35px;
`;

const MyShellsPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 700px;
  height: fit-content;
  gap: 10px;
`;

export { MyShellsPageWrapper, MyShellsPageContainer };
