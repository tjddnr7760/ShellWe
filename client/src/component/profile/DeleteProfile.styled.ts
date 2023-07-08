import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  width: 700px;
  height: 350px;
  background-color: #fff;
  border-radius: 10px;
  border: 0.5px solid rgba(0, 0, 0, 0.5);
  padding-left: 50px;
`;
const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 270px;
  max-height: 140px;
  gap: 10px;
`;

const Title = styled.div`
  font-size: 16px;
`;

const Notice = styled.div`
  background-color: #fff;
  border-radius: 5px;
  border: 0.5px solid rgba(0, 0, 0, 0.5);
  padding: 20px;
  line-height: 120%;
`;

const ButtonBox = styled.div`
  display: flex;
  gap: 10px;
`;

export { Wrapper, ContentBox, Title, Notice, ButtonBox };
