import { useEffect, useMemo, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  MessageRoom,
  MessageRoomContainer,
  MyChat,
  Opponent,
  OpponentChat,
  Notificationtext,
  NotificationContainer,
  CloseButton,
} from './DMRoom.styled';
import Avatar from '../../common/avatar/Avatar.tsx';
import { closeWebSocket, connectToWebSocket } from '../../utill/wesocket.ts';
import React from 'react';
import { ChatTextArea } from '../../common/chattextarea/ChatTextArea.tsx';
import { useMediaQuery } from 'react-responsive';

interface socketMessage {
  roomId: number;
  payload: string;
  mine: boolean;
  notification: boolean;
  createdAt: string;
  member?: {
    id: number;
    displayName: string;
    profileUrl: string;
  };
}

interface DMRoomProps {
  id: number;
  setIsRoomOpened: (type: boolean) => void;
}
export const DMRoom = React.memo(function DMRoom({
  id,
  setIsRoomOpened,
}: DMRoomProps) {
  const [websocket, setWebsocket] = useState<WebSocket>();
  const [chats, setChats] = useState<socketMessage[]>([]);
  const messageContainerRef = useRef<HTMLDivElement>(null);
  const isMobileScreen = useMediaQuery({ maxWidth: 768 });

  const memoizedSetChats = useMemo(() => {
    const updateChats = (messageData: string) => {
      setChats((prevChats) => {
        return [...prevChats, JSON.parse(messageData)];
      });
    };
    return updateChats;
  }, [websocket, chats]);
  useEffect(() => {
    const client = connectToWebSocket(id, memoizedSetChats);

    setWebsocket(client);

    return () => {
      setChats([]);
      closeWebSocket(client);
    };
  }, [id]);

  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  }, [chats]);

  const handleCloseClick = () => {
    setIsRoomOpened(false);
  };
  return (
    <>
      {websocket && (
        <MessageRoomContainer>
          {isMobileScreen && (
            <CloseButton onClick={handleCloseClick}>x</CloseButton>
          )}
          <MessageRoom ref={messageContainerRef}>
            {chats &&
              chats.map((chat) => {
                if (chat.notification) {
                  return (
                    <NotificationContainer key={uuidv4()}>
                      <Notificationtext>{chat.payload}</Notificationtext>
                    </NotificationContainer>
                  );
                }
                if (chat.mine) {
                  return <MyChat key={uuidv4()}>{chat.payload}</MyChat>;
                } else {
                  return (
                    <Opponent key={uuidv4()}>
                      {chat.member && (
                        <Avatar avatartype={'icon'} member={chat.member} />
                      )}
                      <OpponentChat>{chat.payload}</OpponentChat>
                    </Opponent>
                  );
                }
              })}
          </MessageRoom>
          <ChatTextArea websocket={websocket} />
        </MessageRoomContainer>
      )}
    </>
  );
});

DMRoom.displayName = 'DMRoom';
