import styled from 'styled-components';

export const MessageRoomContainer = styled.div`
  height: 850px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 768px) {
    height: 100%;
  }
`;
export const NotificationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 5px;
`;
export const Notificationtext = styled.div`
  margin: 8px 12px 15px 0px;
  max-width: 500px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  padding: 10px;
  overflow: hidden;
  word-break: break-word;
  background-color: #70dfb4;
  line-height: 24px;
  @media (max-width: 768px) {
    margin: 0px;
  }
`;
export const MessageRoom = styled.div`
  border-radius: 30px;
  background-color: #00000010;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  overflow-y: scroll;
  flex: 1;
  @media (max-width: 768px) {
    border-radius: 0px;
    min-height: 600px;
  }
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

export const CloseButton = styled.button`
  position: fixed;
  width: 30px;
  height: 30px;
  top: 10px;
  right: 0;
  border-radius: 20px;
  border: 0px;
  background-color: #bbe7ff;
`;
