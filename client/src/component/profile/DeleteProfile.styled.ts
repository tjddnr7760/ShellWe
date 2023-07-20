import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  background-color: #fff;
  border-radius: 10px;
  border: 0.5px solid rgba(0, 0, 0, 0.5);
  padding: 50px;

  @media (max-width: 768px) {
    padding: 30px;
    gap: 20px;
  }
`;
const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 270px;
  gap: 10px;
`;

const Title = styled.div`
  font-size: 26px;
`;

const Notice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  border: 0.5px solid rgba(0, 0, 0, 0.5);
  padding: 20px;
  width: 300px;
  height: 150px;
  line-height: 150%;
  font-size: 20px;
`;

const ButtonBox = styled.div`
  display: flex;
  gap: 10px;
`;

const PasswordInputModal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  div {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
`;

const PasswordInput = styled.input`
  border-radius: 5px;
  width: 250px;
  height: 30px;
  font-size: 26px;
`;

export {
  Wrapper,
  ContentBox,
  Title,
  Notice,
  ButtonBox,
  PasswordInputModal,
  PasswordInput,
};
