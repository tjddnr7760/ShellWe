import {
  MessageListContainer,
  MessageListBox,
  MessageContainer,
  MessageUserNickName,
  MessageBody,
  MessageBox,
  DeleteButton,
  Unread,
  MessageHeader,
  HeaderLeft,
} from '../../page/directmessage/DirectMessage.styled';
import Avatar from '../../common/avatar/Avatar';
import { useDeleteChatRoom } from '../../hooks/chat/useDeleteChat';

interface DMProps {
  chat: ChatList;
  handleClickRoom: (roomId: number) => void;
}

interface ChatList {
  id: number;
  unread: number;
  lastMessage: string;
  member: Member;
}

interface Member {
  id: number;
  displayName: string;
  profileUrl: string;
}

const DM = ({ chat, handleClickRoom }: DMProps) => {
  const chatRoomId = chat.id;
  const { mutate: DeleteChatRoom } = useDeleteChatRoom(chatRoomId);

  const handleClick = () => {
    handleClickRoom(chatRoomId);
  };

  const handleDelete = () => {
    DeleteChatRoom();
  };

  const MakePartOfBodyText = (body: string) => {
    if (body.length < 25) {
      return body;
    } else {
      const slicebody = body.slice(0, 25);
      return slicebody.charAt(slicebody.length - 1) === '.'
        ? slicebody + '.'
        : slicebody + '..';
    }
  };
  return (
    <div>
      <MessageListContainer onClick={handleClick}>
        <MessageListBox>
          <Avatar avatartype={'UserImg'} member={chat.member} />
          <MessageContainer>
            <MessageBox>
              <MessageHeader>
                <HeaderLeft>
                  <MessageUserNickName>
                    {chat.member.displayName}
                  </MessageUserNickName>
                  <Unread>{chat.unread}</Unread>
                </HeaderLeft>
                <DeleteButton onClick={handleDelete}>x</DeleteButton>
              </MessageHeader>
              <MessageBody>{MakePartOfBodyText(chat.lastMessage)}</MessageBody>
            </MessageBox>
          </MessageContainer>
        </MessageListBox>
      </MessageListContainer>
    </div>
  );
};

export default DM;
