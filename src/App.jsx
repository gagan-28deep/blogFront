import { Outlet } from "react-router-dom";
import { Footer, Header } from "./components";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import getStorage from "./service/storageService";
import {
  getUserData,
  setAccessToken,
  setIsAuthenticated,
  setRefreshToken,
} from "./Store/slices/authSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const userData = getStorage("user");
    const accessToken = getStorage("accessToken");
    const refreshToken = getStorage("refreshToken")
    if (userData) {
      dispatch(getUserData(userData));
    }
    if (accessToken && refreshToken) {
      dispatch(setAccessToken(accessToken));
      dispatch(setRefreshToken(refreshToken))
      dispatch(setIsAuthenticated(true));
    }
  }, [dispatch]);
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
