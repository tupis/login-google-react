import axios from "axios";

const baseURLGoogle = "https://www.googleapis.com/oauth2/v3/userinfo";

export const APIGoogle = axios.create({
  baseURL: baseURLGoogle,
});
