import styled from 'styled-components';

const MyPageWrapper = styled.div`
  width: 1560px;
  height: 1080px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 35px;
`;

const MyPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  height: fit-content;
  gap: 10px;
`;

export { MyPageWrapper, MyPageContainer };
