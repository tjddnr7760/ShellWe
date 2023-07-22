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
  const { mutate } = useMutation(() => postSignup(requestBody));
  return { mutate };
};
