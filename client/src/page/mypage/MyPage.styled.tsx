import styled from 'styled-components';

const MyPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 35px;
`;

const MyPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 700px;
  height: fit-content;
  gap: 10px;
`;

export { MyPageWrapper, MyPageContainer };
