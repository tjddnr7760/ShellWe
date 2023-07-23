import styled from 'styled-components';

const MyPageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  justify-content: center;
`;

const MyPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 735px;
  height: fit-content;
  gap: 15px;
  padding: 35px;

  @media (max-width: 768px) {
    padding: 15px;
    height: auto;
  }
`;

const Logout = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export { MyPageWrapper, MyPageContainer, Logout };
