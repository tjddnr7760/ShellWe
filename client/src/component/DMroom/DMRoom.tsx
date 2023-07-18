import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import {
  ChatTextAreaContainer,
  ImageContainer,
  MessageLiftButton,
  MessageRoom,
  MessageRoomContainer,
  MyChat,
  Opponent,
  OpponentChat,
  SendButton,
  TextArea,
  TextAreaContainer,
} from './DMRoom.styled';
import { Avatar } from '../../common/avatar/Avatar';
export const DMRoom = () => {
  return (
    <MessageRoomContainer>
      <MessageLiftButton>상단바</MessageLiftButton>
      <MessageRoom>
        <Opponent>
          <Avatar avatartype={'UserImg'} />
          <OpponentChat>네 안녕하세요 ㅎㅎ</OpponentChat>
        </Opponent>
        <MyChat>안녕하세요!안녕하세요!안녕하세요!안녕하세요!안녕하세요!</MyChat>
        <MyChat>안녕하세요!</MyChat>
        <MyChat>안녕하세요!</MyChat>
        <MyChat>안녕하세요!</MyChat>
      </MessageRoom>
      <ChatTextAreaContainer>
        <ImageContainer src="https://cdn-icons-png.flaticon.com/512/8069/8069741.png"></ImageContainer>
        <TextAreaContainer>
          <TextArea />
          <SendButton>
            <FontAwesomeIcon icon={faLocationArrow} size="1x" color="white" />
          </SendButton>
        </TextAreaContainer>
      </ChatTextAreaContainer>
    </MessageRoomContainer>
  );
};
