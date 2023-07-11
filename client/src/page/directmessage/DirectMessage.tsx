import {
  MessageWrapper,
  MessageListContainer,
  MessageListHeader,
  MessageMyInfo,
  MessageListItem,
  MessageListUserInfo,
  MessageUserNickName,
  MessageUserLastText,
  MessageRoomContainer,
  MessageLiftButton,
  MessageRoom,
  Opponent,
  OpponentChat,
  MyChat,
  ChatTextAreaContainer,
  ImageContainer,
  TextAreaContainer,
  TextArea,
  SendButton,
} from './DirectMessage.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import Avatar from '../../common/avatar/Avatar';

const DirectMessage: React.FC = () => {
  return (
    <>
      <MessageWrapper>
        <MessageListContainer>
          <MessageListHeader>
            <MessageMyInfo>정찬영</MessageMyInfo>
            ChatList
          </MessageListHeader>
          <MessageListItem>
            <Avatar avatartype={'UserImg'} />
            <MessageListUserInfo>
              <MessageUserNickName>NickName</MessageUserNickName>
              <MessageUserLastText>UseText</MessageUserLastText>
            </MessageListUserInfo>
          </MessageListItem>
          <MessageListItem>
            <Avatar avatartype={'UserImg'} />
            <MessageListUserInfo>
              <MessageUserNickName>NickName</MessageUserNickName>
              <MessageUserLastText>
                UsessssssssssssrLddddddddddddddddddddddastTextdd
              </MessageUserLastText>
            </MessageListUserInfo>
          </MessageListItem>
        </MessageListContainer>
        <MessageRoomContainer>
          <MessageLiftButton>상단바</MessageLiftButton>
          <MessageRoom>
            <Opponent>
              <Avatar avatartype={'UserImg'} />
              <OpponentChat>네 안녕하세요 ㅎㅎ</OpponentChat>
            </Opponent>
            <MyChat>
              안녕하세요!안녕하세요!안녕하세요!안녕하세요!안녕하세요!
            </MyChat>
            <MyChat>안녕하세요!</MyChat>
            <MyChat>안녕하세요!</MyChat>
            <MyChat>안녕하세요!</MyChat>
          </MessageRoom>
          <ChatTextAreaContainer>
            <ImageContainer src="https://cdn-icons-png.flaticon.com/512/8069/8069741.png"></ImageContainer>
            <TextAreaContainer>
              <TextArea />
              <SendButton>
                <FontAwesomeIcon
                  icon={faLocationArrow}
                  size="1x"
                  color="white"
                />
              </SendButton>
            </TextAreaContainer>
          </ChatTextAreaContainer>
        </MessageRoomContainer>
      </MessageWrapper>
    </>
  );
};

export default DirectMessage;
