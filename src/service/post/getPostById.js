import { defaultSecuredAxios } from "../DefaultSecuredAxiosInstance";

export const getSinglePostById = (id) => {
  return defaultSecuredAxios.get(`/post/getpostbyid/${id?.id}`);
};
