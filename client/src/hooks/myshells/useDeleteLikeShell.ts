import { useMutation } from 'react-query';
import { axiosInstance, getHeader } from '../../utill/axiosInstance';
import { useLikeShells } from './useLikeShells';
import { getMemberIdFromLocalStorage } from '../../utill/localstorageData';

const getMemberIdForDelete = async (shellId: number) => {
  const { data } = await axiosInstance({
    url: `/cart/${shellId}`,
    method: 'delete',
    headers: getHeader(),
  });
  return { data };
};

export const useDeleteLikeShell = (shellId: number) => {
  const { data = {}, mutate } = useMutation(
    () => getMemberIdForDelete(shellId),
    {
      onSuccess: () => {
        useLikeShells(getMemberIdFromLocalStorage());
      },
    }
  );

  return { data, mutate };
};
