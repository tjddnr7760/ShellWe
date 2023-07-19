import { useMutation } from 'react-query';
import { axiosInstance, getHeader } from '../../utill/axiosInstance';
import { useNavigate } from 'react-router-dom';

interface ChatListData {
  data: ChatList[];
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

interface GetChatRoomIdArgs {
  (
    chatRoomId: number,
    method: string,
    isHeader?: boolean
  ): Promise<ChatListData>;
}

const getChatRoomId: GetChatRoomIdArgs = async (
  chatRoomId,
  method,
  isHeader = false
): Promise<ChatListData> => {
  const headers = isHeader ? getHeader() : undefined;

  const { data } = await axiosInstance({
    url: `/chat/${chatRoomId}`,
    method,
    headers,
  });
  return { data };
};

// 챗룸 삭제
export const useDeleteChatRoom = (chatRoomId: number) => {
  const navigate = useNavigate();

  const { data = {}, mutate } = useMutation(
    () => getChatRoomId(chatRoomId, 'delete', true),
    {
      onSuccess: () => {
        window.location.reload();
        navigate(`/chat`);
      },
    }
  );

  return { data, mutate };
};
