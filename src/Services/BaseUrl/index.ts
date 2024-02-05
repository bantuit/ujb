import Axios, { AxiosInstance } from 'axios';

export const baseUrl: AxiosInstance = Axios.create({
  baseURL: 'http://192.168.94.178:45455',
  headers: {
    'Content-type': 'application/json'
  }
});

export const catchHandler = (error: unknown) => {
  error;
};
