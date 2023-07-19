import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import {
  ChatTextAreaContainer,
  ImageContainer,
  MessageRoom,
  MessageRoomContainer,
  MyChat,
  Opponent,
  OpponentChat,
  SendButton,
  TextArea,
  TextAreaContainer,
  Notificationtext,
  NotificationContainer,
} from './DMRoom.styled';
import Avatar from '../../common/avatar/Avatar.tsx';
import {
  closeWebSocket,
  connectToWebSocket,
} from '../../utill/websocketUtils.ts';

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

export const DMRoom = ({ id }: { id: number }) => {
  console.log(id);
  const [websocket, setWebsocket] = useState<WebSocket>();
  const [chats, setChats] = useState<socketMessage[]>([]);
  const [text, setText] = useState<string>('');
  const messageContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // 웹소켓 연결
    const client = connectToWebSocket(id, (messageData: string) => {
      setChats((prevChats) => [...prevChats, JSON.parse(messageData)]);
    });

    setWebsocket(client);

    return () => {
      setChats([]);
      closeWebSocket(client);
    };
  }, [id]);

  const handleClickSendMessage = () => {
    websocket?.send(text);
    setText('');
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleClickSendMessage();
    }
  };
  return (
    <MessageRoomContainer>
      <MessageRoom ref={messageContainerRef}>
        {chats &&
          chats.map((chat) => {
            console.log('chats', chats);
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
      <ChatTextAreaContainer>
        <ImageContainer src="https://cdn-icons-png.flaticon.com/512/8069/8069741.png"></ImageContainer>
        <TextAreaContainer>
          <TextArea
            value={text}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setText(e.target.value);
            }}
            onKeyDown={handleKeyDown}
          />
          <SendButton onClick={handleClickSendMessage}>
            <FontAwesomeIcon icon={faLocationArrow} size="1x" color="white" />
          </SendButton>
        </TextAreaContainer>
      </ChatTextAreaContainer>
    </MessageRoomContainer>
  );
};
