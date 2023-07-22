/* eslint-disable @typescript-eslint/no-explicit-any */
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
    url: `/trades/${sellerMemberId}`,
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

  const { mutate } = useMutation(
    () => postBuyerShellsId(sellerMemberId, requestBodyForPoke),
    {
      onSuccess: () => {
        alert(
          '찌르기에 성공하였습니다! \n판매자가 거래를 수락하면 자동으로 채팅방이 생성됩니다.'
        );
        navigate(`/main`);
      },
      onError(res: any) {
        switch (res.response.data.errorMessage) {
          case 'Trade Duplicated':
            alert('이미 찌르기한 Shell입니다.');
            break;
          case 'Trade Id Error':
            alert('네트워크 오류. 다시 시도해주세요.');
            navigate(`/shelldetail/${id}`);
            break;
          case 'Trade Failed, Check parameter':
            alert('유효하지 않은 Shell 정보입니다. 다시 시도해주세요');
            navigate(`/shelldetail/${id}`);
            break;
          default:
            break;
        }
      },
    }
  );
  return { mutate };
};
