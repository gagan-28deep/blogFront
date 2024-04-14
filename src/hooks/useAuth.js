import { useDispatch, useSelector } from "react-redux";
import {
  getUserData,
  getUserDataSuccess,
  getUserError,
  getUserLoading,
  getUserPasswordFailure,
  getUserPasswordLoading,
  getUserPasswordSuccess,
  setAccessToken,
  setIsAuthenticated,
  setRefreshToken,
} from "../Store/slices/authSlice";

import { signup } from "../service/auth/signup";
import { login } from "../service/auth/login";
import {logout} from "../service/auth/logout"
import {resetPassword} from "../service/auth/resetPassword"
import { showToast } from "../utilities/toastCont";
import { useNavigate } from "react-router-dom";
import { removeStorage, setStorage } from "../service/storageService";

const useAuth = () => {
  const accessToken = useSelector((state)=>state.auth.accessToken)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // SignUp
  const handleSignUp = async (data) => {
    try {
      dispatch(getUserLoading());
      const response = await signup(data);
      dispatch(getUserData(response?.data?.data));
      dispatch(getUserDataSuccess(response?.data?.message));
      showToast(response?.data?.message, "success");
      navigate("/");
    } catch (error) {
      dispatch(getUserError(error?.response?.data?.message));
      showToast(error?.response?.data?.message, "error");
    }
  };
  const handleLogin = async (data) => {
    try {
      dispatch(getUserLoading());
      const response = await login(data);
      setStorage("user" , response?.data?.data)
      setStorage("accessToken", response?.data?.data?.accessToken);
      setStorage("refreshToken" , response?.data?.data?.refreshToken)
      dispatch(getUserData(response?.data?.data));
      dispatch(setAccessToken(response?.data?.data?.accessToken))
      dispatch(setRefreshToken(response?.data?.data?.refreshToken))
      dispatch(setIsAuthenticated(true))
      dispatch(getUserDataSuccess(response?.data?.message));
      showToast(response?.data?.message, "success");
      navigate("/");
    } catch (error) {
      dispatch(getUserError(error?.response?.data?.message));
      showToast(error?.response?.data?.message, "error");
    }
  };

  const handleLogout = async ()=>{
    try {
      const headers = {
        Authorization : `Bearer ${accessToken}`
      }
      const response = await logout(headers)
      if(response){
        dispatch(setAccessToken(null))
        dispatch(setIsAuthenticated(false))
        dispatch(setRefreshToken(null))
        dispatch(getUserData(response?.data?.data))
        removeStorage("accessToken")
        removeStorage("refreshToken")
        removeStorage("user")
        showToast(response?.data?.message , "success")
      }
    } catch (error) {
      console.log("err" , error);
    }
  }

  // Reset Password
  const handleResetPassword = async(data)=>{
    try {
      const headers = {
        Authorization : `Bearer ${accessToken}`
      }
      const response = await resetPassword(data , headers)
      dispatch(getUserPasswordLoading())
      dispatch(getUserPasswordSuccess(true))
      showToast(response?.data?.message, "success");
    } catch (error) {
      dispatch(getUserPasswordFailure(true))
      showToast(error?.response?.data?.message, "error");
    }
  }
  return { handleSignUp, handleLogin , handleLogout , handleResetPassword };
};

export default useAuth;
