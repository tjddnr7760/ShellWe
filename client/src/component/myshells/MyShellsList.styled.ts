import styled from 'styled-components';
const Wrapper = styled.div`
  max-width: 700px;
  max-height: fit-content;
  border: 0.5px solid rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  overflow: hidden;

  @media (max-width: 768px) {
    max-width: 350px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  width: auto;
  max-height: 700px;
  overflow-y: scroll;
  padding: 50px;
`;

export { Container, Wrapper };
