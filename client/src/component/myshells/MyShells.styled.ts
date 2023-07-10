import styled from 'styled-components';

const MyShellsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #ffffff;
  border-radius: 10px;
  max-width: 700px;
  width: 100%;
  height: fit-content;
  gap: 10px;
`;

const ImgBox = styled.div`
  background-color: #ffffff;
  border: 0.5px solid rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  overflow: hidden;
  max-width: 150px;
  height: fit-content;

  @media (max-width: 768px) {
    max-width: 100px;
  }
`;

const ShellImg = styled.img`
  width: 100%;
`;

const ShellInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  gap: 20px;
  background-color: #ffffff;
  border: 0.5px solid rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  padding: 20px;
  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border: 0.5px solid rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  font-size: 16px;
  width: 100%;
  padding: 10px;

  &.title {
    @media (max-width: 768px) {
      width: 100%;
    }
  }

  &.category {
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export { MyShellsContainer, ImgBox, ShellImg, ShellInfoBox, Text };
