import axios, { AxiosInstance } from "axios";

const baseURLGoogle = "https://www.googleapis.com/oauth2/v3/userinfo";

export const APIGoogle: AxiosInstance = axios.create({
  baseURL: baseURLGoogle,
});

export const APIUsers: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_CONNECTION,
});
