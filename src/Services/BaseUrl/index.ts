import Axios, { AxiosInstance } from 'axios';

export const baseUrl: AxiosInstance = Axios.create({
  baseURL: 'http://172.168.1.184:8000',
  headers: {
    'Content-type': 'application/json'
  }
});

export const catchHandler = (error: unknown) => {
  error;
};
