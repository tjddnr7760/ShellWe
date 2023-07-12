import { useMutation } from 'react-query';
import { sendAxiosRequest } from '../utill/sendAxiosRequest.ts';
import { RequestConfigArgs } from '../utill/requestConfig.ts';

export const useMutionRequest = (
  requestConfig: RequestConfigArgs,
  onSuccess?: (responseData: object) => void // onSuccess 매개변수 추가
) => {
  const { data, mutate } = useMutation(() => sendAxiosRequest(requestConfig), {
    onSuccess: (responseData) => {
      if (onSuccess) {
        onSuccess(responseData); // 전달된 onSuccess 콜백 실행
      }
    },
  });

  return { data, mutate };
};
