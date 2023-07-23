import styled from 'styled-components';

const ShellInfoContainer = styled.div`
  display: flex;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.5);
  padding: 15px;
  gap: 15px;

  &:active {
    background-color: rgba(202, 240, 248, 0.15);
  }
`;
const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
`;
const ImageBox = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  overflow: hidden;
  max-width: 100px;
  max-height: 100px;
`;

const ShellImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const TextBox = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  border-radius: 10px;
  font-size: 20px;
  padding-left: 10px;
`;

export { ShellInfoContainer, ImageContainer, ImageBox, ShellImage, TextBox };
