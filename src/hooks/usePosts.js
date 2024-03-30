import { useDispatch } from "react-redux";
import {
  getPostsData,
  getPostsLoading,
  getAllPostsError,
  getSinglePostData,
  getSinglePostError,
  getSinglePostLoading
} from "../Store/slices/postSlice";
import { getAllPosts } from "../service/post/getAllPosts";
import { getSinglePostById } from "../service/post/getPostById";

const usePosts = () => {
  const dispath = useDispatch();

  // Get All Posts
  const handleGetAllPosts = async () => {
    try {
      dispath(getPostsLoading());
      const response = await getAllPosts();
      dispath(getPostsData(response?.data?.data));
    //   return response?.data?.data
    } catch (error) {
      dispath(getAllPostsError(error?.message));
    }
  };

  // Get A Single Post
  const handleGetPostById = async (id)=>{
    try {
      dispath(getSinglePostLoading())
      const response = await getSinglePostById(id)
      console.log(response);
      dispath(getSinglePostData(response?.data?.data))
    } catch (error) {
      dispath(getSinglePostError(error?.message))
    }
  }

  return {
    handleGetAllPosts,
    handleGetPostById
  };
};

export default usePosts
