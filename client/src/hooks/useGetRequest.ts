import { useQuery } from 'react-query';
import { sendAxiosRequest } from '../utill/sendAxiosRequest.ts';

const DOMAIN = `${import.meta.env.VITE_KEY}`;

export const useGetRequest = (
  apiUrl: string,
  methodType: string,
  requestData: null | object | FormData = null,
  isHeader: boolean,
  onSuccess?: (responseData: object) => void // onSuccess 매개변수 추가
) => {
  const requestHeaders = isHeader
    ? { 'ngrok-skip-browser-warning': '69420' }
    : null;

  const requestGetConfig = {
    url: `${DOMAIN}${apiUrl}`,
    method: methodType,
    data: requestData,
    headers: requestHeaders,
  };

  const { isLoading, data } = useQuery(
    ['GetData'],
    () => sendAxiosRequest(requestGetConfig),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
      onSuccess: (responseData) => {
        if (onSuccess) {
          onSuccess(responseData); // 전달된 onSuccess 콜백 실행
        }
      },
    }
  );

  return { isLoading, data };
};
