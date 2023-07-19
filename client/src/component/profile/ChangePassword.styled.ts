import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  background-color: #fff;
  border-radius: 10px;
  border: 0.5px solid rgba(0, 0, 0, 0.5);
  padding: 50px;

  @media (max-width: 768px) {
    padding: 30px;
  }
`;
const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 320px;
  height: fit-content;
  gap: 10px;
`;

const Title = styled.div`
  font-size: 20px;
`;

const Input = styled.input`
  font-size: 20px;
  min-width: 100px;
  max-width: 320px;
  height: 30px;
  border-radius: 5px;
  border: 0.5px solid rgba(0, 0, 0, 0.5);
  padding: 5px;
`;

const ButtonBox = styled.div`
  display: flex;
  gap: 10px;
`;

export { Wrapper, ContentBox, Title, Input, ButtonBox };
