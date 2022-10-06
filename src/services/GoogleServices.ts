import { APIGoogle } from "./apis";

export const LoginGoogle: (response: any) => Promise<void> = async (
  response: any
): Promise<void> => {
  const userInfo = await APIGoogle.get("/", {
    headers: { Authorization: `Bearer ${response.access_token}` },
  }).then((res) => res.data);
  return userInfo;
};
