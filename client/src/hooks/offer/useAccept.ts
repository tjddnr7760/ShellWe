import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { axiosWebSocketInstance, getHeader } from '../../utill/axiosInstance';
import {
  RequestBodyForAccept,
  ApiResponseOfAcceptShell,
} from '../../dataset/TypesOfferedShell.ts';
import { getMemberIdFromLocalStorage } from '../../utill/localstorageData.ts';

const postAcceptShell = async (
  requestBody: RequestBodyForAccept
): Promise<ApiResponseOfAcceptShell> => {
  const { data } = await axiosWebSocketInstance({
    url: `/chat`,
    method: 'post',
    data: requestBody,
    headers: getHeader(),
  });
  return data;
};

// const testFunction = () => {};
// // delete api 요청 함수를 만들어서 onSuccess에서 실행 테스트 해보자.

export const useAcceptShell = () => {
  const navigate = useNavigate();
  const memberId = Number(getMemberIdFromLocalStorage());
  const { mutate } = useMutation(
    (requestBody: RequestBodyForAccept) => postAcceptShell(requestBody),
    {
      onSuccess: () => {
        // testFunction;
        navigate(`/dm/${memberId}`);
      },
      onError(res: any) {
        switch (res.response.data.message) {
          case 'MemberRoom exists':
            alert('이미 수락한 쉘입니다.\nDM으로 교환을 시도해보세요!');
            break;
        }
      },
    }
  );
  return { mutate };
};

// useAcceptShell 요청 성공 시, useDeleteAccept 실행.
