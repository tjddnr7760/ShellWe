import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../../utill/axiosInstance';

const postSignup = async (): Promise<any> => {
  const { data } = await axiosInstance({
    url: '/members',
    method: 'post',
    data: {
      email: '',
      displayName: '',
      password: '',
    },
  });
  return data;
};

export const usePostSignup = () => {
  const navigate = useNavigate();
  const { mutate } = useMutation(() => postSignup(), {
    onSuccess: () => {
      navigate('/aftersignup');
    },
  });
  return { mutate };
};
