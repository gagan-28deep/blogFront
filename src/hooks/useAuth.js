import { useDispatch } from "react-redux";
import {
  getUserData,
  getUserDataSuccess,
  getUserError,
  getUserLoading,
} from "../Store/slices/authSlice";

import { signup } from "../service/auth/signup";
import { login } from "../service/auth/login";
import { showToast } from "../utilities/toastCont";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
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
      dispatch(getUserData(response?.data?.data));
      dispatch(getUserDataSuccess(response?.data?.message));
      showToast(response?.data?.message, "success");
      navigate("/");
    } catch (error) {
      dispatch(getUserError(error?.response?.data?.message));
      showToast(error?.response?.data?.message, "error");
    }
  };
  return { handleSignUp, handleLogin };
};

export default useAuth;
