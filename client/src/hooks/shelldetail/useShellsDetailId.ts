import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { axiosInstance, getHeader } from '../../utill/axiosInstance';
import { queryKeys } from '../../dataset/queryKey';

interface GetShellsArgs {
  (shellId: string, method: string, isHeader?: boolean): Promise<any>;
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

export const useGetShellDetail = () => {
  const { id } = useParams();
  const { data = {} } = useQuery(queryKeys.shellsDetail, () =>
    getShellId(id as string, 'get', true)
  );

  return { data };
};
