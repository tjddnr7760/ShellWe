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
  const { data: chatListData, refreshChatList } = useChatList();
  const [ClickedRoomId, setClickedRoomId] = useState<number>();
  const [isRoomOpened, setIsRoomOpened] = useState<boolean>();

  const handleClickRoom = (roomId: number): void => {
    if (isRoomOpened && ClickedRoomId === roomId) {
      setIsRoomOpened(false);
    } else {
      setIsRoomOpened(true);
      setClickedRoomId(roomId);
      refreshChatList();
    }
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
            {chatListData &&
              chatListData.data.map((chat) => (
                <DM
                  key={chat.id}
                  chat={chat}
                  handleClickRoom={handleClickRoom}
                  isRoomOpened={isRoomOpened}
                  setIsRoomOpened={setIsRoomOpened}
                  setClickedRoomId={setClickedRoomId}
                  ClickedRoomId={ClickedRoomId}
                />
              ))}
          </MessageListBody>
        </MessageListWrapper>
        <MessageRoomWrapper>
          {isRoomOpened && ClickedRoomId ? (
            <DMRoom id={ClickedRoomId} />
          ) : (
            <NoneClickedDMRoom>Click your message!</NoneClickedDMRoom>
          )}
        </MessageRoomWrapper>
      </MessageWrapper>
    </>
  );
};

export default DirectMessage;
