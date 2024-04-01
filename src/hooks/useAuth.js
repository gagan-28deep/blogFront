import { useDispatch } from "react-redux";
import {
  getUserData,
  getUserDataSuccess,
  getUserError,
  getUserLoading,
} from "../Store/slices/authSlice";

import { signup } from "../service/auth/signup";
import { login } from "../service/auth/login";

const useAuth = () => {
  const dispatch = useDispatch();
  // SignUp
  const handleSignUp = async (data) => {
    try {
      dispatch(getUserLoading());
      const response = await signup(data);
      dispatch(getUserData(response?.data?.data));
      dispatch(getUserDataSuccess(response?.data?.message));
    } catch (error) {
      dispatch(getUserError(error?.response?.data?.message));
    }
  };
  const handleLogin = async (data) => {
    try {
      dispatch(getUserLoading());
      const response = await login(data);
      dispatch(getUserData(response?.data?.data));
      dispatch(getUserDataSuccess(response?.data?.message));
    } catch (error) {
      dispatch(getUserError(error?.response?.data?.message));
    }
  };
  return { handleSignUp, handleLogin };
};

export default useAuth;
