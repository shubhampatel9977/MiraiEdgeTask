import axios, { type AxiosInstance } from "axios";

const basePath: string = import.meta.env.VITE_BASH_PATH as string;

export const Axios: AxiosInstance = axios.create({
  baseURL: basePath,
  headers: {
    "x-api-key": "reqres-free-v1",
  },
});
