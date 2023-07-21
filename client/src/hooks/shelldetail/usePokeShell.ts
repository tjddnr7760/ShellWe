import { useMutation } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { axiosInstance, getHeader } from '../../utill/axiosInstance';
import {
  RequestBodyForPoke,
  ApiResponseOfPokeShell,
} from '../../dataset/ShellDetailType';

const postBuyerShellsId = async (
  sellerMemberId: number,
  requestBodyForPoke: RequestBodyForPoke
): Promise<ApiResponseOfPokeShell> => {
  const { data } = await axiosInstance({
    url: `trades/${sellerMemberId}`,
    method: 'post',
    data: requestBodyForPoke,
    headers: getHeader(),
  });
  return data;
};

export const usePokeShell = (
  sellerMemberId: number,
  requestBodyForPoke: RequestBodyForPoke
) => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log('usePokeShell 실행');

  const { mutate } = useMutation(
    () => postBuyerShellsId(sellerMemberId, requestBodyForPoke),
    {
      onSuccess: () => {
        console.log('success');
        navigate(`/shelldetail/${id}`);
        window.location.reload();
      },
    }
  );
  return { mutate };
};
