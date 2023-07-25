import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../../utill/axiosInstance';
import { useSetRecoilState } from 'recoil';
import { userStateWithExpiry } from '../../recoil/selector';

interface RequestBody {
  email: string;
  password: string;
}
const postLogin = async (requestBody: RequestBody): Promise<any> => {
  const response = await axiosInstance({
    url: `/auth/login`,
    method: 'post',
    data: requestBody,
  });

  return response;
};

export const usePostLogin = () => {
  const navigate = useNavigate();
  const setIsLoggedIn = useSetRecoilState(userStateWithExpiry);

  const { mutate } = useMutation(
    (requestBody: RequestBody) => postLogin(requestBody),
    {
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
      onError(res: any) {
        if (res.response.status === 401) {
          alert('이메일과 비밀번호를 다시 확인해주세요.');
        }
      },
    }
  );
  return { mutate };
};
