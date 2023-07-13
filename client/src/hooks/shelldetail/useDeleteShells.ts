import { useMutation } from 'react-query';
import { axiosInstance, getHeader } from '../../utill/axiosInstance';
import { useNavigate } from 'react-router-dom';

interface GetShellsArgs {
  (shellId: number, method: string, isHeader?: boolean): Promise<any>;
}

const deleteShells: GetShellsArgs = async (shellId, method) => {
  const { data } = await axiosInstance({
    url: `/shells/${shellId}`,
    method,
    headers: getHeader(),
  });
  return { data };
};

// 제품 삭제(DELETE)
export const useDeleteShells = (shellId: number) => {
  const navigate = useNavigate();

  const { data = {}, mutate } = useMutation(
    () => deleteShells(shellId, 'delete'),
    {
      onSuccess: () => {
        navigate(`main`);
      },
    }
  );

  return { data, mutate };
};
