import { useMemo, useState } from 'react';
import {
  MessageRoomWrapper,
  MessageListBody,
  MessageListWrapper,
  MessageWrapper,
  MessageListHeader,
  MessageMyInfo,
  NoneClickedDMRoom,
} from './DirectMessage.styled.ts';
import { DMRoom } from '../../component/DMroom/DMRoom';
import DM from '../../component/dmlist/DM';
import { useChatList } from '../../hooks/chat/useChatList';
import { getDisplayNameFromLocalStorage } from '../../utill/localstorageData.ts';

export const DirectMessage: React.FC = () => {
  const { data: chatListData, refreshChatList } = useChatList();
  const memoizedChatListData = useMemo(() => chatListData, [chatListData]);
  const [ClickedRoomId, setClickedRoomId] = useState<number>();
  const [isRoomOpened, setIsRoomOpened] = useState(false);
  const displayName = getDisplayNameFromLocalStorage();

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
        <MessageListWrapper isroomopened={isRoomOpened ? 'noView' : 'view'}>
          <MessageListHeader>
            <MessageMyInfo>{displayName}</MessageMyInfo>
            ChatList
          </MessageListHeader>
          <MessageListBody>
            {memoizedChatListData &&
              memoizedChatListData.data.map((chat) => (
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
            <DMRoom setIsRoomOpened={setIsRoomOpened} id={ClickedRoomId} />
          ) : (
            <NoneClickedDMRoom>Click your message!</NoneClickedDMRoom>
          )}
        </MessageRoomWrapper>
      </MessageWrapper>
    </>
  );
};

export default DirectMessage;
