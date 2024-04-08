import { defaultSecuredAxios } from "../DefaultSecuredAxiosInstance";

export const logout = (headers) => {
  console.log("header" , headers);
  return defaultSecuredAxios.post(`/user/logout` , null , {headers});
};
