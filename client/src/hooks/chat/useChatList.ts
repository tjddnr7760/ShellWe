import { useQuery } from 'react-query';
import { axiosInstance, getHeader } from '../../utill/axiosInstance';
import { queryKeys } from '../../dataset/queryKey';
const getChatList = async () => {
  const { data } = await axiosInstance({
    url: `/chat`,
    method: 'get',
    headers: getHeader(),
  });
  return { data };
};

export const useChatList = () => {
  const { data } = useQuery([queryKeys.chatList], () => getChatList());
  console.log(data);

  return { data };
};
