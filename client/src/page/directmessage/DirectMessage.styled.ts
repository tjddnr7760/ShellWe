import styled from 'styled-components';

export const MessageWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  margin: 10px;
  justify-content: center;
  align-items: center;
`;

export const MessageListWrapper = styled.div`
  height: 100%;
  min-width: 300px;
`;
export const MessageListContainer = styled.div`
  padding: 10px;
  background-color: #bbe7ff;
  cursor: pointer;
`;

export const MessageRoomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  max-width: 680px;
`;

export const MessageListHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  height: 130px;
  font-size: 20px;
  padding-top: 20px;
  padding-left: 15px;
  background-color: #bbe7ff;
  border-radius: 15px 15px 0 0;
`;

export const MessageListBody = styled.div`
  overflow-y: scroll;
  height: 720px;
  background-color: #bbe7ff;
  border-radius: 0 0 15px 15px;
`;

export const MessageMyInfo = styled.div`
  font-weight: 400;
  font-size: 26px;
  margin-bottom: 6px;
`;

export const MessageListBox = styled.div`
  display: flex;
  gap: 10px;
`;

export const MessageContainer = styled.div`
  width: 250px;
  border-radius: 15px;
  padding: 15px;
  background-color: white;
  font-size: 20px;
`;

export const MessageBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: space-between;
`;

export const MessageHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Unread = styled.div`
  color: red;
`;

export const HeaderLeft = styled.div`
  display: flex;
  gap: 5px;
`;

export const DeleteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 0.1px solid #cdcdcd;
  background-color: #fff;
  z-index: 99;
  cursor: pointer;
  &:hover {
    background-color: #90e0ef;
  }
`;

export const MessageUserNickName = styled.div`
  font-weight: 500;
`;

export const MessageBody = styled.div`
  color: #828282;
  overflow: hidden;
`;

export const NoneClickedDMRoom = styled.div`
  font-size: 50px;
`;
