// 요청 리스트 GET
import { useQuery } from 'react-query';
import { axiosInstance, getHeader } from '../../utill/axiosInstance';
import { queryKeys } from '../../dataset/queryKey';
import { GetPokedShellIdArgs } from '../../dataset/TypesOfferedShell';

const getPokedShellId: GetPokedShellIdArgs = async (shellId) => {
  const { data } = await axiosInstance({
    url: `/trades/${shellId}`,
    method: 'get',
    headers: getHeader(),
  });
  return data;
};

export const useOfferedShellsList = (shellId: number) => {
  if (shellId === undefined) {
    return {};
  }
  const { data = {} } = useQuery([queryKeys.tradesList, shellId], () =>
    getPokedShellId(shellId)
  );
  return { data };
};
