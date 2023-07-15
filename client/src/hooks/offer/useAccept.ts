import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { axiosInstance, getHeader } from '../../utill/axiosInstance';

export interface RequestBodyForAccept {
  myShellId: number;
  sellerShellId: number;
  sellerMemberId: number;
}

export interface ApiResponseOfAcceptShell {
  redirectUrl: string;
}

const postAcceptShell = async (
  requestBody: RequestBodyForAccept
): Promise<ApiResponseOfAcceptShell> => {
  const { data } = await axiosInstance({
    url: `chat`,
    method: 'post',
    data: requestBody,
    headers: getHeader(),
  });
  return data;
};

export const useAcceptShell = () => {
  const navigate = useNavigate();
  const { mutate } = useMutation(
    (requestBody: RequestBodyForAccept) => postAcceptShell(requestBody),
    {
      onSuccess: (data: ApiResponseOfAcceptShell) => {
        const redirectUrl = data.redirectUrl;
        navigate(`${redirectUrl}`);
      },
    }
  );
  return { mutate };
};
