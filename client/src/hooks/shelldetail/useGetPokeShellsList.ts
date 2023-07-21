import { useQuery } from 'react-query';
import { axiosInstance, getHeader } from '../../utill/axiosInstance';
import { queryKeys } from '../../dataset/queryKey';

interface GetShellsArgs {
  (memberId: number, method: string, isHeader?: boolean): Promise<any>;
}

const getPokedShellId: GetShellsArgs = async (memberId, method) => {
  const { data } = await axiosInstance({
    url: `/myshell/${memberId}/myshells?status=active`,
    method,
    headers: getHeader(),
  });
  return { data };
};

export const useGetMyShellToPoke = (memberId: number) => {
  const { data = {} } = useQuery(queryKeys.myshellListToPoke, () =>
    getPokedShellId(memberId, 'get')
  );
  return { data };
};
