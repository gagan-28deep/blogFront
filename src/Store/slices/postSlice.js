import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Get Posts
  allPostsData: null,
  isPostsLoading: false,
  postsError: null,

  // Get A single Post
  singlePostData: null,
  singlePostLoading: false,
  singlePostError: null,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    // Get All Posts
    getPostsLoading: (state) => {
      state.isPostsLoading = true;
      state.postsError = false;
      state.allPostsData = null;
    },
    getPostsData: (state, action) => {
      (state.isPostsLoading = false),
        (state.allPostsData = action.payload),
        (state.postsError = null);
    },
    getAllPostsError: (state, action) => {
      state.allPostsData = null;
      state.postsError = action.payload;
      state.isPostsLoading = false;
    },

    // get a  Single Post By Id
    getSinglePostLoading: (state) => {
      state.singlePostLoading = true;
      state.singlePostData = false;
      state.singlePostError = false;
    },
    getSinglePostData: (state, action) => {
      (state.singlePostLoading = false),
        (state.singlePostData = action.payload),
        (state.singlePostError = null);
    },
    getSinglePostError: (state, action) => {
      (state.singlePostData = null),
        (state.singlePostError = action.payload),
        (state.singlePostLoading = false);
    },
  },
});

export default postSlice.reducer;

export const {
  getPostsLoading,
  getPostsData,
  getAllPostsError,
  getSinglePostData,
  getSinglePostError,
  getSinglePostLoading,
} = postSlice.actions;
