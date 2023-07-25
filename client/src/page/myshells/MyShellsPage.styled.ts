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
  height: auto;
  gap: 15px;
  padding: 35px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 15px;
  }
`;

export { MyShellsPageWrapper, MyShellsPageContainer };
