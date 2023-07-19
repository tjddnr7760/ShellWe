import { useState } from 'react';
import {
  MessageRoomWrapper,
  MessageListBody,
  MessageListWrapper,
  MessageWrapper,
  MessageListHeader,
  MessageMyInfo,
  NoneClickedDMRoom,
} from './DirectMessage.styled';
import { DMRoom } from '../../component/DMroom/DMRoom';
import DM from '../../component/dmlist/DM';
import { useChatList } from '../../hooks/chat/useChatList';

export const DirectMessage: React.FC = () => {
  const { data: chatListData } = useChatList();
  const [ClickedRoomId, setClickedRoomId] = useState<number>();
  const chatList = chatListData?.data;

  const handleClickRoom = (roomId: number): void => {
    setClickedRoomId(roomId);
  };

  return (
    <>
      <MessageWrapper>
        <MessageListWrapper>
          <MessageListHeader>
            <MessageMyInfo>
              displayName
              {/* Recoil에 저장된 {displayName} */}
            </MessageMyInfo>
            ChatList
          </MessageListHeader>
          <MessageListBody>
            {chatList?.map((chat) => (
              <DM key={chat.id} chat={chat} handleClickRoom={handleClickRoom} />
            ))}
          </MessageListBody>
        </MessageListWrapper>
        {ClickedRoomId ? (
          <DMRoom id={ClickedRoomId} />
        ) : (
          <NoneClickedDMRoom>Click your message!</NoneClickedDMRoom>
        )}
      </MessageWrapper>
    </>
  );
};

export default DirectMessage;
