import styled from 'styled-components';

const ShellInfoContainer = styled.div`
  display: flex;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.5);
  padding: 12px;
  gap: 15px;
`;

const ImageBox = styled.div`
  display: flex;
  align-items: center;
  border-radius: 10px;
  flex-grow: 1;
  max-width: 105px;
  height: fit-content;
  overflow: hidden;
`;

const ShellImage = styled.img`
  width: 100%;
`;

const TextBox = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  border-radius: 10px;
  font-size: 20px;
  padding-left: 10px;
`;

export { ShellInfoContainer, ImageBox, ShellImage, TextBox };
