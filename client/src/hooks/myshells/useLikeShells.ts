import { useQuery } from 'react-query';
import { axiosInstance, getHeader } from '../../utill/axiosInstance';
import { queryKeys } from '../../dataset/queryKey';

interface GetMyShellsArgs {
  (memberId: number): Promise<any>;
}

const getMyShellId: GetMyShellsArgs = async (memberId) => {
  const { data } = await axiosInstance({
    url: `/cart/myshell/${memberId}`,
    method: 'get',
    headers: getHeader(),
  });
  return data;
};

export const useLikeShells = (memberId: number) => {
  const { data = {} } = useQuery(
    [queryKeys.likeShell, memberId],
    () => getMyShellId(memberId),
    { suspense: false }
  );
  return { data };
};
