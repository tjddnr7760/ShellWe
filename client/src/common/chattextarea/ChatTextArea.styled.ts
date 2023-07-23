import styled from 'styled-components';

export const ChatTextAreaContainer = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const ImageContainer = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
  object-fit: cover;
  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

export const TextAreaContainer = styled.div`
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0.5px solid #00000020;
  margin-left: 15px;
  flex-grow: 1;

  width: fit-content;
`;

export const TextArea = styled.input`
  border: none;
  flex-grow: 1;
  border-radius: 15px;
  padding-left: 10px;
  &:focus {
    outline: none;
  }
  padding: 10px;
`;

export const SendButton = styled.button`
  background-color: #48cae4;
  width: 50px;
  height: 40px;
  border-radius: 16px;
  font-weight: 300;
  cursor: pointer;
  border: 0.5px solid white;
  &:hover {
    color: #023e8a;
    background-color: #90e0ef;
  }

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    margin-right: 3px;
  }
`;
