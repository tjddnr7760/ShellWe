import styled from 'styled-components';

export const MessageRoomContainer = styled.div`
  height: 900px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 130px 30px;
  gap: 20px;
`;
export const NotificationContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const Notificationtext = styled.div`
  margin: 8px 12px 15px 0px;
  max-width: 500px;
  border-radius: 15px;
  display: flex;
  align-self: flex-end;
  align-items: center;
  padding: 10px;
  overflow: hidden;
  word-break: break-word;
  background-color: #70dfb4;
  line-height: 24px;
`;
export const MessageRoom = styled.div`
  border-radius: 30px;
  background-color: #00000010;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  overflow-y: scroll;
  flex: 1;
`;
export const Opponent = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0px 12px 3px;
`;

export const OpponentChat = styled.div`
  margin-left: 5px;
  border-radius: 15px;
  display: flex;
  align-self: flex-start;
  align-items: center;
  padding: 20px;
  overflow: hidden;
  word-break: break-word;
  background-color: #6cedf599;
`;

export const MyChat = styled.div`
  margin: 8px 12px 15px 0px;
  max-width: 500px;
  border-radius: 15px;
  display: flex;
  align-self: flex-end;
  align-items: center;
  padding: 20px;
  overflow: hidden;
  word-break: break-word;
  background-color: #bbe7ff;
  line-height: 24px;
`;

export const ChatTextAreaContainer = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
`;

export const ImageContainer = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
  object-fit: cover;
`;

export const TextAreaContainer = styled.div`
  border-radius: 25px;
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
  border-radius: 25px;
  padding-left: 10px;
  &:focus {
    outline: none;
  }
  padding: 16px;
`;

export const SendButton = styled.button`
  background-color: #48cae4;
  width: 50px;
  height: 50px;
  border-radius: 16px;
  font-weight: 300;
  cursor: pointer;
  border: 0.5px solid white;
  &:hover {
    color: #023e8a;
    background-color: #90e0ef;
  }
`;
