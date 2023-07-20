import { useQuery } from 'react-query';
import { axiosWebSocketInstance, getHeader } from '../../utill/axiosInstance';
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
  const { data } = await axiosWebSocketInstance({
    url: `/chat`,
    method: 'get',
    headers: getHeader(),
  });
  return { data };
};

export const useChatList = () => {
  const { data } = useQuery([queryKeys.chatList], () => getChatList());

  const refreshChatList = async () => {
    await queryClient.invalidateQueries(queryKeys.chatList);
  };
  return { data, refreshChatList };
};
