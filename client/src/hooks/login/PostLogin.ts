import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../../utill/axiosInstance';
import { useSetRecoilState } from 'recoil';
import { isLogInState } from '../../recoil/atom';

// request body가 없음. 이메일, 비밀번호 -> loginPage에서 인자를 전달.
// 인자를 받는 곳이 없음.
const postLogin = async (): Promise<any> => {
  const { data } = await axiosInstance({
    url: '/auth/login',
    method: 'post',
  });
  return data;
};

export const usePostLogin = () => {
  const navigate = useNavigate();
  const setIsLoggedIn = useSetRecoilState(isLogInState);

  const { mutate } = useMutation(() => postLogin(), {
    onSuccess: (res) => {
      setIsLoggedIn(true);
      const accessToken = res.headers.authorization;
      const id = res.data.id;
      const displayName = res.data.displayName;
      const profileUrl = res.data.profileUrl;
      const isMe = res.data.isMe;
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('id', id);
      localStorage.setItem('displayName', displayName);
      localStorage.setItem('profileUrl', profileUrl);
      localStorage.setItem('isMe', isMe);
      navigate('/main');
    },
  });
  return { mutate };
};
