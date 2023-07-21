import { useQuery } from 'react-query';
import { axiosInstance, getHeader } from '../../utill/axiosInstance';
import { queryKeys } from '../../dataset/queryKey';

interface GetMyShellsArgs {
  (memberId: number): Promise<any>;
}

const getMyShellId: GetMyShellsArgs = async (memberId) => {
  const { data } = await axiosInstance({
    url: `/myshell/${memberId}/shells?status=inactive`,
    method: 'get',
    headers: getHeader(),
  });
  return data;
};

export const usePastShells = (memberId: number) => {
  const { data = {} } = useQuery(
    [queryKeys.pastShell, memberId],
    () => getMyShellId(memberId),
    { suspense: false }
  );
  return { data };
};
