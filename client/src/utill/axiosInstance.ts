import axios, { AxiosRequestConfig } from 'axios';

export const getHeader = () => {
  return { 'ngrok-skip-browser-warning': '69420' };
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
