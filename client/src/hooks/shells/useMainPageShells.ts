import { useQuery } from 'react-query';
import { axiosInstance, getHeader } from '../../utill/axiosInstance';
import { queryKeys } from '../../dataset/queryKey';

const getMainShells = async (): Promise<any> => {
  const { data } = await axiosInstance({
    url: `/trades/main?size=8`,
    method: 'get',
    headers: getHeader(),
  });
  return { data };
};

export const useMainPageShells = () => {
  const { data = {} } = useQuery(queryKeys.main, () => getMainShells());
  return { data };
};
