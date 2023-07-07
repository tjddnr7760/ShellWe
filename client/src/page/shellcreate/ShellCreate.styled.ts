import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';

export const ShellCreateContainer = styled.section`
  border: 1px solid rgba(202, 240, 248, 0.5);
  background: rgba(202, 240, 248, 0.5);
  display: flex;
  flex-direction: column;
  margin: 100px;
  align-items: center;
  width: 80%;
  font-size: 20px;
  font-style: normal;
  font-family: Inter;
  line-height: normal;
  gap: 10px;
  padding: 20px;
`;
export const CreateInput = styled.input`
  margin: 5px;
  border: none;
  outline: none;
`;
export const CreateTitleWrapper = styled.div`
  width: 50%;
  height: 55px;
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
`;
