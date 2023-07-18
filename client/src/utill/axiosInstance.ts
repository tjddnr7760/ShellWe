import axios, { AxiosRequestConfig } from 'axios';

export const getHeader = () => {
  return {
    'ngrok-skip-browser-warning': '69420',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJkaXNwbGF5TmFtZSI6InRqZGRuciIsImlkIjoxLCJlbWFpbFZlcmlmaWNhdGlvblN0YXR1cyI6dHJ1ZSwic3ViIjoidGpkZG5yNzc2MEBuYXZlci5jb20iLCJpYXQiOjE2ODk2NDc3NDUsImV4cCI6MTY5MDA3OTc0NX0.fWz96N56asF_UW41EtYO2grkQ1Htf0TD6XHCz1dc9gs',
  };
};

const config: AxiosRequestConfig = { baseURL: `${import.meta.env.VITE_KEY}` };

export const axiosInstance = axios.create(config);

/*
사용법    
 await axiosInstance({
    url: urlEndpoint,
    method: 'POST',
    data: { email, password },
    headers: getHeader,
});
*/
