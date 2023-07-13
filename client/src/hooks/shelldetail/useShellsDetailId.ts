import { useQuery } from 'react-query';
import { axiosInstance, getHeader } from '../../utill/axiosInstance';
import { queryKeys } from '../../dataset/queryKey';

interface GetShellsArgs {
  (shellId: number, method: string, isHeader?: boolean): Promise<any>;
}

const getShellId: GetShellsArgs = async (shellId, method, isHeader = false) => {
  const headers = isHeader ? getHeader() : undefined;

  const { data } = await axiosInstance({
    url: `/shells/${shellId}`,
    method,
    headers,
  });
  return { data };
};

//제품 상세 조회(GET)
//** 제품 상세 데이터를 서버에서 호출하는 함수 */
export const useGetShellDetail = (shellId: number) => {
  const { data = {} } = useQuery(queryKeys.shellsDetail, () =>
    getShellId(shellId, 'get', true)
  );

  return { data };
};
