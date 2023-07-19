import { useQuery } from 'react-query';
import { axiosInstance, getHeader } from '../../utill/axiosInstance';
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

const getChatList = async (): Promise<ChatListData> => {
  const { data } = await axiosInstance({
    url: `/chat`,
    method: 'get',
    headers: getHeader(),
  });
  return { data };
};

export const useChatList = () => {
  const { data } = useQuery([queryKeys.chatList], () => getChatList());
  return { data };
};
