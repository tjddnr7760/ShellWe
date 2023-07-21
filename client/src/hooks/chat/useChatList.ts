import { useQuery } from 'react-query';
import { axiosInstance, getHeader } from '../../utill/axiosInstance';
import { queryKeys } from '../../dataset/queryKey';
import { queryClient } from '../../utill/queryClient';

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

const getChatList = async (): Promise<ChatListData> => {
  const { data } = await axiosInstance({
    url: `/chat`,
    method: 'get',
    headers: getHeader(),
  });
  return { data };
};

export const useChatList = () => {
  const { data, isLoading } = useQuery(
    [queryKeys.chatList],
    () => getChatList(),
    {
      staleTime: 60000,
    }
  );
  console.log(2);
  const refreshChatList = async () => {
    await queryClient.invalidateQueries(queryKeys.chatList);
  };
  return { data, refreshChatList, isLoading };
};
