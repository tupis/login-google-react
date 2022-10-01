import { APIGoogle } from "./apis";

export const LoginGoogle = async (response: any) => {
  console.log(response);
  const userInfo = await APIGoogle.get("/", {
    headers: { Authorization: `Bearer ${response.access_token}` },
  }).then((res) => res.data);
  return userInfo;
};
