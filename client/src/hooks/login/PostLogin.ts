import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { axiosInstance, getHeader } from '../../utill/axiosInstance';

const postLogin = async (): Promise<any> => {
  const { data } = await axiosInstance({
    url: '/auth/login',
    method: 'post',
    // headers: getHeader(),
  });
  return data;
};

export const usePostLogin = () => {
  const navigate = useNavigate();
  const { mutate } = useMutation(() => postLogin(), {
    onSuccess: (res) => {
      const accessToken = res.headers.authorization;
      const userData = res.data;
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('userData', userData);
      navigate(`/main`);
    },
    // onError: (res) => {
    //   if (res.status === 401) {
    //     alert('회원가입 실패');
    //   }
    // },
  });
  return { mutate };
};
