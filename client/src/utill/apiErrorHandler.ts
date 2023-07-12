import { AxiosError } from 'axios';

const apiErrorHandler = (error: unknown): void => {
  if (error instanceof Error) {
    // Axios Error 처리
    if ('response' in error) {
      // 서버 응답 오류
      console.error('서버 응답 오류:', (error as AxiosError).response?.data);
    } else if ('request' in error) {
      // 요청이 전송되었지만 응답이 없는 경우
      console.error('응답 없음:', (error as AxiosError).request);
    } else {
      // 오류가 발생한 요청을 설정하는 중에 발생한 오류
      console.error('요청 설정 오류:', error.message);
    }
  } else {
    // 그 외의 오류 처리
    console.error('알 수 없는 오류:', error);
  }
};

//에러 코드로 만듬

export default apiErrorHandler;
