import { defaultSecuredAxios } from "../DefaultSecuredAxiosInstance";

export const resetPassword = (data , headers) => {
  return defaultSecuredAxios.post("/user/reset-password" , data , {headers});
};
