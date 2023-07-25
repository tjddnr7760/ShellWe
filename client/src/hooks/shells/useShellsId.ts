import { useQuery } from 'react-query';
import { axiosInstance, getHeader } from '../../utill/axiosInstance';
import { queryKeys } from '../../dataset/queryKey';

interface GetShellsArgs {
  (id: number, method: string, isHeader?: boolean): Promise<any>;
}

const getShellId: GetShellsArgs = async (id, method, isHeader = false) => {
  const headers = isHeader ? getHeader() : undefined;

  const { data } = await axiosInstance({
    url: `/shells/${id}`,
    method,
    headers: {
      ...headers,
    },
  });
  return { data };
};

//제품 상세 조회
export const useGetShells = (id: number) => {
  const { data = {} } = useQuery(queryKeys.shellsDetail, () =>
    getShellId(id, 'get', true)
  );

  return { data };
};
