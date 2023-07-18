import { useMutation } from 'react-query';
import { axiosInstance, getHeader } from '../../utill/axiosInstance';
import { useNavigate, useParams } from 'react-router-dom';

interface GetShellsArgs {
  (shellId: string, method: string, isHeader?: boolean): Promise<any>;
}

const deleteShells: GetShellsArgs = async (shellId, method) => {
  const { data } = await axiosInstance({
    url: `/shells/${shellId}`,
    method,
    headers: getHeader(),
  });
  return { data };
};

export const useDeleteShells = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data = {}, mutate } = useMutation(
    () => deleteShells(id as string, 'delete'),
    {
      onSuccess: () => {
        navigate(`/main`);
      },
    }
  );

  return { data, mutate };
};
