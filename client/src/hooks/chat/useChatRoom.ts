import { useQuery } from 'react-query';
import { axiosInstance, getHeader } from '../../utill/axiosInstance';
import { queryKeys } from '../../dataset/queryKey';
const getChatRoom = async (id: string, accessToken: string | null) => {
  const { data } = await axiosInstance({
    url: `ws://ec2-43-201-29-247.ap-northeast-2.compute.amazonaws.com:8081/ws/chat?roomId=${id}&${accessToken}`,
    method: 'get',
    headers: getHeader(),
  });
  return { data };
};

export const useChatRoom = (id: string) => {
  const accessToken = localStorage.getItem('accessToken');

  const { data } = useQuery([queryKeys.chatList], () =>
    getChatRoom(id, accessToken)
  );
  console.log(data);
  return { data };
};
