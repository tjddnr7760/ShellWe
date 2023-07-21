import axios, { AxiosRequestConfig } from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { getAccessToken } from './localstorageData';

export const getHeader = () => {
  return {
    'ngrok-skip-browser-warning': '69420',
    Authorization: getAccessToken(),
  };
};

export const getPostHeader = () => {
  return {
    'ngrok-skip-browser-warning': '69420',
    Authorization: getAccessToken(),
    'Content-Type': `multipart/form-data; boundary=<${uuidv4}>`,
  };
};
const config: AxiosRequestConfig = { baseURL: `${import.meta.env.VITE_KEY}` };

export const axiosInstance = axios.create(config);
