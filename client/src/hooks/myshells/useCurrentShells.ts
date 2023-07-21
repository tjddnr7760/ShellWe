import { useQuery } from 'react-query';
import { axiosInstance, getHeader } from '../../utill/axiosInstance';
import { queryKeys } from '../../dataset/queryKey';

interface GetMyShellsArgs {
  (memberId: number): Promise<any>;
}

const getMyShellId: GetMyShellsArgs = async (memberId) => {
  const { data } = await axiosInstance({
    url: `/myshell/${memberId}/shells?status=active`,
    method: 'get',
    headers: getHeader(),
  });
  return data;
};

export const useCurrentShells = (memberId: number) => {
  const { data = {} } = useQuery([queryKeys.myshells, memberId], () =>
    getMyShellId(memberId)
  );
  return { data };
};
