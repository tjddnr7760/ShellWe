import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { axiosInstance, getHeader } from '../../utill/axiosInstance';
import {
  RequestBodyForPoke,
  ApiResponseOfPokeShell,
} from '../../dataset/ShellDetailType';

const postBuyerShellsId = async (
  requestBodyForPoke: RequestBodyForPoke,
  sellerMemberId: number
): Promise<ApiResponseOfPokeShell> => {
  const { data } = await axiosInstance({
    url: `trades/${sellerMemberId}`,
    method: 'post',
    data: requestBodyForPoke,
    headers: getHeader(),
  });
  return data;
};

export const usePokeShell = (sellerMemberId: number) => {
  const navigate = useNavigate();
  const { mutate } = useMutation(
    (requestBodyForPoke: RequestBodyForPoke) =>
      postBuyerShellsId(requestBodyForPoke, sellerMemberId),
    {
      onSuccess: (data: ApiResponseOfPokeShell) => {
        const redirectUrl = data.redirectUrl;
        navigate(`${redirectUrl}`);
      },
    }
  );
  return { mutate };
};
