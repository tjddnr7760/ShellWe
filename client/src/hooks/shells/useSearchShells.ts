import { useQuery } from 'react-query';
import { axiosInstance, getHeader } from '../../utill/axiosInstance';
import { queryKeys } from '../../dataset/queryKey';

interface getSearchShellsArgs {
  (searchQuery: string | null): Promise<any>;
}

const getSearchShells: getSearchShellsArgs = async (searchQuery) => {
  const { data } = await axiosInstance.get(`/shells`, {
    params: {
      title: encodeURIComponent(searchQuery as string),
    },
    headers: getHeader(),
  });
  return { data };
};

//제품 상세 조회
export const useSearchShells = (searchQuery: string | null) => {
  if (searchQuery === null) {
    return null;
  }
  const { data = {} } = useQuery([queryKeys.search, searchQuery], () =>
    getSearchShells(searchQuery)
  );

  return data;
};
