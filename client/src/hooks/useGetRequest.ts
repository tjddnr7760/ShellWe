import { useQuery } from 'react-query';
import { sendAxiosRequest } from '../utill/sendAxiosRequest.ts';
import { RequestConfigArgs } from '../utill/requestConfig.ts';
//key는 enum으로
export const useGetRequest = (
  key: string,
  requestConfig: RequestConfigArgs,
  onSuccessFunc?: (responseData: object) => void // onSuccess 매개변수 추가
) => {
  const { isLoading, data = [] } = useQuery(
    key,
    () => sendAxiosRequest(requestConfig),
    {
      onSuccess: (responseData) => {
        if (onSuccessFunc) {
          onSuccessFunc(responseData); // 전달된 onSuccess 콜백 실행
        }
      },
    }
  );

  return { isLoading, data };
};
