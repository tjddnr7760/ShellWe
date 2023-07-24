import { useRecoilValue } from 'recoil';
import { userStateWithExpiry } from '../../recoil/selector';
import { axiosInstance, getHeader } from '../../utill/axiosInstance';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

const getCartShell = async (id: number) => {
  const { data } = await axiosInstance({
    url: `/cart/${id}`,
    method: 'post',
    headers: getHeader(),
  });
  return { data };
};
export const useCreateShells = (id: number) => {
  const isLoggedIn = useRecoilValue(userStateWithExpiry);
  const navigate = useNavigate();

  const { mutate } = useMutation(() => getCartShell(id), {
    onError: () => {
      if (isLoggedIn) {
        alert('이미 찜한 쉘입니다');
      } else {
        alert('로그인 해주세요');
        navigate(`/login`);
      }
    },
  });
  const handleMutate = () => {
    mutate();
  };
  return { mutate: handleMutate };
};
