import { useMutation } from 'react-query';
import { sendAxiosRequest } from '../utill/sendAxiosRequest.ts';
const DOMAIN = `${import.meta.env.VITE_KEY}`;

export const useMutionRequest = (
  apiUrl: string,
  methodType: string,
  requestData: null | object | FormData = null,
  isHeader: boolean,
  onSuccess?: (responseData: any) => void // onSuccess 매개변수 추가
) => {
  const requestHeaders = isHeader
    ? { Authorization: 'Bearer your_access_token' }
    : null;

  const requestMutionConfig = {
    url: `${DOMAIN}${apiUrl}`,
    method: methodType,
    data: requestData,
    headers: requestHeaders,
  };

  const { data, mutate } = useMutation(
    () => sendAxiosRequest(requestMutionConfig),
    {
      onSuccess: (responseData) => {
        if (onSuccess) {
          onSuccess(responseData); // 전달된 onSuccess 콜백 실행
        }
      },
    }
  );

  return { data, mutate };
};
