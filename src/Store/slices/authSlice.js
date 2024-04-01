import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Get User
  userLoading: false,
  userData: null,
  userError: null,
  userDataSuccess: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Get User
    getUserLoading: (state) => {
      (state.userLoading = true), (state.userData = false);
    },
    getUserData: (state, action) => {
      state.userData = action.payload;
      state.userError = null;
      state.userLoading = false;
    },
    getUserError: (state, action) => {
      (state.userData = null), (state.userError = action.payload);
    },
    getUserDataSuccess: (state, action) => {
      state.userDataSuccess = action.payload;
    },
  },
});

export const { getUserData, getUserError, getUserLoading, getUserDataSuccess } =
  authSlice.actions;

export default authSlice.reducer;
