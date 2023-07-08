import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #ffffff;
  border-radius: 10px;
  max-width: 620px;
  gap: 20px;
  @media (max-width: 768px) {
    max-width: 350px;
  }
`;

const ImgBox = styled.div`
  background-color: #ffffff;
  border: 0.5px solid rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  overflow: hidden;
  max-width: 150px;
  height: fit-content;
`;

const ShellImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const ShellInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: #ffffff;
  border: 0.5px solid rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  flex-grow: 1;
  padding: 20px;
  @media (max-width: 768px) {
    max-width: 200px;
  }
  // 크기 줄였을 때, 어떻게 계속 줄어들게 할 수 있을까?
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border: 0.5px solid rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  width: 100%;
  height: 100%;
  font-size: 16px;
  padding: 10px;
  flex-grow: 1;

  @media (max-width: 768px) {
    max-width: 200px;
  }
`;

export { Container, ImgBox, ShellImg, ShellInfoBox, Text };
