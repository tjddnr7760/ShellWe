import { AxiosError } from 'axios';

const apiErrorHandler = (error: unknown): void => {
  if (error instanceof Error) {
    const axiosError = error as AxiosError;

    if (axiosError.response) {
      const { status, data } = axiosError.response;

      if (status === 400) {
        console.error('상태 코드 400: 잘못된 요청 오류');
        console.error('응답 데이터:', data);
        // 상태 코드 400에 대한 처리 로직
      } else if (status === 401) {
        console.error('상태 코드 401: 인증 오류');
        console.error('응답 데이터:', data);
        // 상태 코드 401에 대한 처리 로직
      } else if (status === 403) {
        console.error('상태 코드 403: 접근 금지 오류');
        console.error('응답 데이터:', data);
        // 상태 코드 403에 대한 처리 로직
      } else if (status === 404) {
        console.error('상태 코드 404: 페이지 찾을 수 없음 오류');
        console.error('응답 데이터:', data);
        // 상태 코드 404에 대한 처리 로직
      } else {
        console.error(`HTTP 오류 - 상태 코드 ${status}`);
        console.error('응답 데이터:', data);
        // 기타 상태 코드에 대한 처리 로직
      }
    } else if (axiosError.request) {
      console.error('응답 없음 - 상태 코드 401');
      // 상태 코드 401에 대한 처리 로직
    } else {
      console.error('요청 설정 오류 - 상태 코드 400');
      // 상태 코드 400에 대한 처리 로직
    }
  } else {
    console.error('알 수 없는 오류:', error);
    // 기타 오류에 대한 처리 로직
  }
};

export default apiErrorHandler;
