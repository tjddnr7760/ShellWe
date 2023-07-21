import axios, { AxiosRequestConfig } from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { getAccessToken } from './localstorageData';

export const getHeader = () => {
  return {
    Authorization: getAccessToken(),
  };
};

export const getPostHeader = () => {
  return {
    Authorization: getAccessToken(),
    'Content-Type': `multipart/form-data; boundary=<${uuidv4}>`,
  };
};
const config: AxiosRequestConfig = { baseURL: `${import.meta.env.VITE_KEY}` };

const WebSocketConfig: AxiosRequestConfig = {
  baseURL: `${import.meta.env.VITE_KEY_DM}`,
};

export const axiosInstance = axios.create(config);
export const axiosWebSocketInstance = axios.create(WebSocketConfig);
