import { defaultSecuredAxios } from "../DefaultSecuredAxiosInstance";

export const signup = (data) => {
  return defaultSecuredAxios.post("/user/signup" , data);
};
