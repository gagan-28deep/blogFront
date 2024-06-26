import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Get User
  userLoading: false,
  userData: null,
  userError: null,
  userDataSuccess: null,
  accessToken: null,
  refreshToken : null,
  isAuthenticated: false,

  // User Password (reset and forgot)
  userPasswordLoading : false,
  userPasswordSuccess : false,
  userPasswordFailure : false
  
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Get User
    getUserLoading: (state) => {
      (state.userLoading = true),
        (state.userData = null),
        (state.userError = null);
    },
    getUserData: (state, action) => {
      state.userData = action.payload;
      state.userError = null;
      state.userLoading = false;
    },
    getUserError: (state, action) => {
      (state.userData = null),
        (state.userError = action.payload),
        (state.userLoading = false);
    },
    getUserDataSuccess: (state, action) => {
      state.userDataSuccess = action.payload;
    },
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    setRefreshToken : (state , action)=>{
      state.refreshToken = action.payload
    },

    // User Password
    getUserPasswordLoading : (state , action)=>{
      state.userPasswordLoading = true
    },
    getUserPasswordSuccess : (state , action)=>{
      state.userPasswordSuccess = action.payload,
      state.userPasswordLoading = false
    },
    getUserPasswordFailure : (state , action)=>{
      state.userPasswordFailure = action.payload,
      state.userPasswordLoading = false
    }
  },
});

export const {
  getUserData,
  getUserError,
  getUserLoading,
  getUserDataSuccess,
  setAccessToken,
  setIsAuthenticated,
  setRefreshToken,
  getUserPasswordFailure,
  getUserPasswordSuccess,
  getUserPasswordLoading
} = authSlice.actions;

export default authSlice.reducer;
