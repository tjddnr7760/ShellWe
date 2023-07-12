import axios from 'axios';

// interface sendAxiosRequestProps {
//   url: string;
//   method: string;
//   data?: object;
//   headers?: object;
// }
export const sendAxiosRequest = async (requestConfig: object) => {
  const response = await axios(requestConfig);
  return response;
};
