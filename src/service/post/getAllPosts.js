import { defaultSecuredAxios } from "../DefaultSecuredAxiosInstance";

export const getAllPosts = () => {
  return defaultSecuredAxios.get(`/post/getallposts`);
};
