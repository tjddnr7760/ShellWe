import { useMutation } from 'react-query';
import { axiosWebSocketInstance, getHeader } from '../../utill/axiosInstance';
import { queryClient } from '../../utill/queryClient';
import { queryKeys } from '../../dataset/queryKey';

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

  const { data } = await axiosWebSocketInstance({
    url: `/chat/${chatRoomId}`,
    method,
    headers,
  });
  return { data };
};

// 챗룸 삭제
export const useDeleteChatRoom = (chatRoomId: number) => {
  const { data = {}, mutate } = useMutation(
    () => getChatRoomId(chatRoomId, 'delete', true),
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries(queryKeys.chatList);
      },
    }
  );

  return { data, mutate };
};
