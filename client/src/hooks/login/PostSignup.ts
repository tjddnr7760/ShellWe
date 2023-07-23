import { useMutation } from 'react-query';
import { axiosInstance } from '../../utill/axiosInstance';

interface RequestBodyForSignup {
  displayName: string;
  email: string;
  password: string;
}

const postSignup = async (requestBody: RequestBodyForSignup): Promise<any> => {
  const { data } = await axiosInstance({
    url: '/members',
    method: 'post',
    data: requestBody,
  });
  return data;
};

export const usePostSignup = (requestBody: RequestBodyForSignup) => {
  const { mutate } = useMutation(() => postSignup(requestBody), {
    onSuccess: () => {
      alert('축하드립니다! 쉘을 교환하는 경험을 누리세요!');
    },
    onError(res: any) {
      switch (res.response.data.errorMessage) {
        case '이미 가입된 이메일 입니다.':
          alert('이미 가입된 이메일 입니다.');
          break;
        case 'Email Send Failed, Invalid email':
          alert('이메일 인증 전송에 실패하였습니다.\n다시 시도해주세요.');
          break;
      }
    },
  });
  return { mutate };
};
