import { useQuery, useMutation } from 'react-query';
import { axiosInstance, getHeader } from '../../utill/axiosInstance';
import { queryKeys } from '../../dataset/queryKey';
import { useNavigate } from 'react-router-dom';

interface GetShellsArgs {
  (id: number, method: string, isHeader?: boolean): Promise<any>;
}

const getShellId: GetShellsArgs = async (id, method, isHeader = false) => {
  const headers = isHeader ? getHeader() : undefined;

  const { data } = await axiosInstance({
    url: `/shells/${id}`,
    method,
    headers,
  });
  return { data };
};

//제품 상세 조회
export const useGetShells = (id: number) => {
  const { data = {} } = useQuery(queryKeys.shellsDetail, () =>
    getShellId(id, 'get')
  );

  return { data };
};

//제품 삭제
export const useDeleteShells = (id: number) => {
  const navigate = useNavigate();

  const { data = {}, mutate } = useMutation(
    () => getShellId(id, 'delete', true),
    {
      onSuccess: () => {
        navigate(`main`);
      },
    }
  );

  return { data, mutate };
};

//사용법
//const { data, mutate } = useDeleteShells(shell.id);
// const handleDelete = () => {
//   mutate();
