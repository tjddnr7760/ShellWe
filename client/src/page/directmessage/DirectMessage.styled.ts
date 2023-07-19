import styled from 'styled-components';

export const MessageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const MessageListWrapper = styled.div`
  height: 100%;
`;
export const MessageListContainer = styled.div`
  padding: 10px;
  background-color: #caf0f8bf;
  cursor: pointer;
`;

export const MessageRoomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
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
`;

export const MessageListBody = styled.div`
  overflow-y: scroll;
  height: 900px;
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
  width: 350px;
  height: 80px;
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
  color: #828282;
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
