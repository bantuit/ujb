import Axios, { AxiosInstance } from 'axios';

const ujb_url = 'https://ujb.biz.id'
// const url = 'https://righttealboard7.conveyor.cloud'

export const baseUrl: AxiosInstance = Axios.create({
  baseURL: ujb_url,
  headers: {
    'Content-type': 'application/json'
  }
});

export const catchHandler = (error: unknown) => {
  error;
};
