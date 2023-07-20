import axios, { AxiosRequestConfig } from 'axios';
import { v4 as uuidv4 } from 'uuid';

export const getHeader = () => {
  return {
    'ngrok-skip-browser-warning': '69420',
    Authorization: `${import.meta.env.VITE_TOKEN}`,
  };
};
export const getPostHeader = () => {
  return {
    'ngrok-skip-browser-warning': '69420',
    Authorization: `${import.meta.env.VITE_TOKEN}`,
    'Content-Type': `multipart/form-data; boundary=<${uuidv4}>`,
  };
};
export const getPostHeader = () => {
  return {
    'ngrok-skip-browser-warning': '69420',
    Authorization: `${import.meta.env.VITE_TOKEN}`,
    'Content-Type': `multipart/form-data; boundary=<${uuidv4}>`,
  };
};
const config: AxiosRequestConfig = { baseURL: `${import.meta.env.VITE_KEY}` };
const WebSocketConfig: AxiosRequestConfig = {
  baseURL: `${import.meta.env.VITE_KEY_DM}`,
};

export const axiosInstance = axios.create(config);
