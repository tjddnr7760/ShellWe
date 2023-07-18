import styled from 'styled-components';

export const MessageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

export const MessageListContainer = styled.div`
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
