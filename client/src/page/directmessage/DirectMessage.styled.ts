import styled from 'styled-components';

export const MessageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
`;

export const MessageListContainer = styled.div`
  width: 32%;
  padding: 15px;
  background-color: #caf0f8bf;
  overflow-y: scroll;
`;

export const MessageListHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: end;
  width: 130px;
  height: 70px;
`;
export const MessageMyInfo = styled.div`
  font-weight: 400;
  font-size: 20px;
  margin-bottom: 6px;
`;

export const MessageListItem = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
`;

export const MessageListUserInfo = styled.div`
  display: flex;
  width: 350px;
  margin-left: 5px;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 15px;
  padding: 15px 8px;
  background-color: white;
  font-size: 16px;
`;

export const MessageUserNickName = styled.div`
  font-weight: 500;
`;

export const MessageUserLastText = styled.div`
  color: #828282;
  overflow: hidden;
`;

export const MessageRoomContainer = styled.div`
  width: 68%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MessageLiftButton = styled.div`
  flex: 1;
`;

export const MessageRoom = styled.div`
  width: 84%;
  height: 850px;
  border-radius: 30px;
  background-color: #00000010;
  display: flex;
  flex-direction: column-reverse;
  align-items: stretch;
  overflow-y: scroll;
  flex: 8;
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
  padding: 15px 18px 15px 18px;
  min-width: 300px;
  max-width: 300px;
  min-height: 70px;
  max-height: auto;
  overflow: hidden;
  word-break: break-word;
  background-color: #6cedf599;
`;

export const MyChat = styled.div`
  margin: 8px 12px 15px 0px;
  border-radius: 15px;
  display: flex;
  align-self: flex-end;
  align-items: center;
  padding: 15px 18px 15px 18px;
  min-width: 300px;
  max-width: 300px;
  min-height: 70px;
  max-height: auto;
  overflow: hidden;
  word-break: break-word;
  background-color: #bbe7ff;
`;

export const ChatTextAreaContainer = styled.div`
  display: flex;
  justify-content: center;
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
  align-items: center;
  justify-content: center;
  border: 0.5px solid #00000020;
  margin-left: 15px;
  width: fit-content;
  flex: 1;
`;

export const TextArea = styled.textarea`
  border: none;
  border-radius: 25px;
  width: 650px;
  height: 30px;
  padding-left: 10px;
  &:focus {
    outline: none;
  }
  padding: 16px 0 0 10px;
  resize: none;
`;

export const SendButton = styled.button`
  background-color: #48cae4;
  width: 40px;
  height: 40px;
  border-radius: 16px;
  font-weight: 300;
  cursor: pointer;
  border: 0.5px solid white;
  font-weight: 400;
  font-size: 14px;
  margin-right: 20px;
  &:hover {
    color: #023e8a;
    background-color: #90e0ef;
  }
`;
