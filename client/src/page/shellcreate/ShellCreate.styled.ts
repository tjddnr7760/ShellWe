import styled from 'styled-components';

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
export const CreateBodyWrapper = styled(CreateTitleWrapper)`
  min-height: 120px;
`;

export const CreateInput = styled.input`
  margin: 5px;
  border: none;
  outline: none;
`;
export const CreateBody = styled.textarea`
  margin: 5px;
  border: none;
  outline: none;
  height: 100%;
  width: auto;
  resize: none;
`;
