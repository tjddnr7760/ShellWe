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
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJkaXNwbGF5TmFtZSI6InRqZGRuciIsImlkIjoxLCJlbWFpbFZlcmlmaWNhdGlvblN0YXR1cyI6dHJ1ZSwic3ViIjoidGpkZG5yNzc2MEBuYXZlci5jb20iLCJpYXQiOjE2ODkzNDgxMzEsImV4cCI6MTY4OTc4MDEzMX0.0XS7OQKM2uSRp6jfeoQKRnptdhxkXlOG7hcq0IVXoUE',
    'Content-Type': `multipart/form-data; boundary=<${uuidv4}>`,
  };
};
const config: AxiosRequestConfig = { baseURL: `${import.meta.env.VITE_KEY}` };

export const axiosInstance = axios.create(config);
