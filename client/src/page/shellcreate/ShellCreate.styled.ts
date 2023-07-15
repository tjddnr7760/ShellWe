import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';

export const ShellCreateContainer = styled.section`
  border: 1px solid rgba(202, 240, 248, 0.5);
  background: rgba(202, 240, 248, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 20px;
  font-style: normal;
  font-family: Inter;
  line-height: normal;
  gap: 10px;
  padding: 20px;
  width: fit-content;
  height: fit-content;
  min-width: 800px;
  @media (max-width: 768px) {
    min-width: 300px;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Logo = styled.img`
  @media (max-width: 768px) {
    max-width: 300px;
  }
`;

export const CreateInput = styled.input`
  margin: 5px;
  border: none;
  outline: none;
`;
export const CreateTitleWrapper = styled.div`
  width: 100%;
  border-radius: 20px;
  border: 0.5px solid rgba(0, 0, 0, 0.5);
  opacity: 0.6499999761581421;
  background: #fff;
  display: flex;
  padding: 10px;
  flex-direction: column;
  text-align: center;
  font-size: 24px;
  gap: 10px;
`;
export const CreateBody = styled(TextareaAutosize)`
  margin: 5px;
  border: none;
  outline: none;
  width: 100%;
  resize: none;
  overflow: hidden;
`;
export const CreateBodyWrapper = styled(CreateTitleWrapper)`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: auto;
  max-height: none;
  flex: 1;
  min-height: 200px;
`;
export const CreateImgContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
`;
export const CreateMainImgWrapper = styled(CreateTitleWrapper)`
  width: 300px;
  display: flex;
`;
export const TitleImg = styled.img``;

export const CreateImgListWrapper = styled(CreateTitleWrapper)`
  min-height: 400px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ShellCreatePage = styled.div`
  display: flex;
  justify-content: center;
`;
