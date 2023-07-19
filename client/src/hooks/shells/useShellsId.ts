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
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJkaXNwbGF5TmFtZSI6InRqZGRuciIsImlkIjoxLCJlbWFpbFZlcmlmaWNhdGlvblN0YXR1cyI6dHJ1ZSwic3ViIjoidGpkZG5yNzc2MEBuYXZlci5jb20iLCJpYXQiOjE2ODkzNDgxMzEsImV4cCI6MTY4OTc4MDEzMX0.0XS7OQKM2uSRp6jfeoQKRnptdhxkXlOG7hcq0IVXoUE',
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
