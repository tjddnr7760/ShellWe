import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../../utill/axiosInstance';
import { useSetRecoilState } from 'recoil';
import { isLogInState } from '../../recoil/atom';

// request body가 없음. 이메일, 비밀번호 -> loginPage에서 인자를 전달.
// 인자를 받는 곳이 없음.
interface RequestBody {
  email: string;
  password: string;
}
const postLogin = async (requestBody: RequestBody): Promise<any> => {
  const { data } = await axiosInstance({
    url: `/auth/login`,
    method: 'post',
    data: requestBody,
  });
  return data;
};

export const usePostLogin = (requestBody: RequestBody) => {
  console.log(1);
  const navigate = useNavigate();
  const setIsLoggedIn = useSetRecoilState(isLogInState);

  const { mutate } = useMutation(() => postLogin(requestBody), {
    onSuccess: (res) => {
      console.log(res);
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
    onError(res) {
      console.log(res);
    },
  });
  return { mutate };
};
