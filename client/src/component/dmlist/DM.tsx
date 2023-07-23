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
import { MakePartOfBodyText } from '../../utill/makeBodyText';

interface DMProps {
  chat: ChatList;
  handleClickRoom: (roomId: number) => void;
  isRoomOpened: boolean | undefined;
  ClickedRoomId: number | undefined;
  setIsRoomOpened: (type: boolean) => void;
  setClickedRoomId: (roomId: number | undefined) => void;
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

const DM = ({
  chat,
  handleClickRoom,
  isRoomOpened,
  setIsRoomOpened,
  setClickedRoomId,
  ClickedRoomId,
}: DMProps) => {
  const { mutate: DeleteChatRoom } = useDeleteChatRoom(chat.id);

  const handleDelete = () => {
    if (isRoomOpened && ClickedRoomId === chat.id) {
      setIsRoomOpened(false);
      setClickedRoomId(undefined);
    }
    DeleteChatRoom();
  };

  return (
    <div>
      <MessageListContainer
        onClick={() => {
          handleClickRoom(chat.id);
        }}
      >
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
              <MessageBody>
                {MakePartOfBodyText(chat.lastMessage, 25)}
              </MessageBody>
            </MessageBox>
          </MessageContainer>
        </MessageListBox>
      </MessageListContainer>
    </div>
  );
};

export default DM;
