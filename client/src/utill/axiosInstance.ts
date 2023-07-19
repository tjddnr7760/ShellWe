import axios, { AxiosRequestConfig } from 'axios';
import { v4 as uuidv4 } from 'uuid';

export const getHeader = () => {
  return {
    'ngrok-skip-browser-warning': '69420',
    Authorization:
      'Bearer eyJhbGciOiJIUzM4NCJ9.eyJkaXNwbGF5TmFtZSI6InRqZGRuciIsImlkIjoxLCJlbWFpbFZlcmlmaWNhdGlvblN0YXR1cyI6dHJ1ZSwic3ViIjoidGpkZG5yNzc2MEBuYXZlci5jb20iLCJpYXQiOjE2ODk2Njk5OTMsImV4cCI6MTY5MDI2OTk5M30.quApNU49HAmBHpm4jr2FC-BKHfpNY0m5TjcQzJ8EYxayGuByX5lLONRvASbQxujW',
  };
};
export const getPostHeader = () => {
  return {
    'ngrok-skip-browser-warning': '69420',
    Authorization:
      'Bearer eyJhbGciOiJIUzM4NCJ9.eyJkaXNwbGF5TmFtZSI6InRqZGRuciIsImlkIjoxLCJlbWFpbFZlcmlmaWNhdGlvblN0YXR1cyI6dHJ1ZSwic3ViIjoidGpkZG5yNzc2MEBuYXZlci5jb20iLCJpYXQiOjE2ODk2Njk5OTMsImV4cCI6MTY5MDI2OTk5M30.quApNU49HAmBHpm4jr2FC-BKHfpNY0m5TjcQzJ8EYxayGuByX5lLONRvASbQxujW',
    'Content-Type': `multipart/form-data; boundary=<${uuidv4}>`,
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
