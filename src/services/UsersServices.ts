import { APIUsers } from "./apis";

export const login: (params: any) => Promise<void> = async (
  params
): Promise<void> => {
  const response = await APIUsers.post("/login", params);
  localStorage.setItem("user", JSON.stringify(response.data.user));
  localStorage.setItem("token", JSON.stringify(response.data.token));
};

export const register: (params: any) => Promise<void> = async (
  params
): Promise<void> => {
  const response = await APIUsers.post("/login", params);
  localStorage.setItem("token", JSON.stringify(response.data.token));
};
