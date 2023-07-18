import axios, { AxiosRequestConfig } from 'axios';

export const getHeader = () => {
  return {
    'ngrok-skip-browser-warning': '69420',
    Authorization:
      'Bearer eyJhbGciOiJIUzM4NCJ9.eyJwcm9maWxlVXJsIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUFjSFR0YzlqZGltaF91SkxzUWFMbDFKQ1l4cXZzSXFZTWhxN0tkYkVXY202SFRfQVZRPXM5Ni1jIiwiZGlzcGxheU5hbWUiOiJjczIxOTkiLCJpZCI6MiwiZW1haWxWZXJpZmljYXRpb25TdGF0dXMiOnRydWUsInN1YiI6InRqZGRucjA3NjBAZ21haWwuY29tIiwiaWF0IjoxNjg5NjcwMDMxLCJleHAiOjE2OTAyNzAwMzF9.fJFvAWr9uCGMn9ObviavThzSXi8V65Ys1IM7h6LSgI8LC9in0xbLDzsrXtm6McW0',
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
