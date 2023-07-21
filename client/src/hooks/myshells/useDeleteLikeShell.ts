import { useMutation } from 'react-query';
import { axiosInstance, getHeader } from '../../utill/axiosInstance';

import { queryKeys } from '../../dataset/queryKey';
import { queryClient } from '../../utill/queryClient';

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
        console.log('1111');
        queryClient.invalidateQueries(queryKeys.likeShell);
      },
    }
  );

  return { data, mutate };
};
