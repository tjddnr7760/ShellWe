import { axiosInstance, getHeader } from '../../utill/axiosInstance';
import { useMutation } from 'react-query';

const getCartShell = async (id: number) => {
  const { data } = await axiosInstance({
    url: `/cart/${id}`,
    method: 'post',
    headers: getHeader(),
  });
  return { data };
};
export const useCreateShells = (id: number) => {
  const { mutate } = useMutation(() => getCartShell(id), {
    onError: () => {
      alert('이미 찜한 쉘입니다');
    },
  });
  const handleMutate = () => {
    mutate();
  };
  return { mutate: handleMutate };
};
