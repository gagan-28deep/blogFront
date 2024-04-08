import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import Write from "./pages/Write.jsx";

import { store } from "./Store/store.js";
import { Provider } from "react-redux";
import SinglePostPage from "./pages/SinglePostPage.jsx";
import { ToastContainer } from "react-toastify";
import SettingsPage from "./pages/SettingsPage.jsx";
import ForgotPasswordPage from "./pages/ForgotPasswordPage.jsx";
import ResetPasswordPage from "./pages/ResetPasswordPage.jsx";
import {AuthLayout} from "./components/index.js"
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <AuthLayout authentication = {false}>
            <Home/>
          </AuthLayout>
        )
      },
      {
        path: "signup",
        element: (
          <AuthLayout authentication = {false}>
            <Signup/>
          </AuthLayout>
        )
      },
      {
        path: "login",
        element: (
          <AuthLayout authentication = {false}>
            <Login/>
          </AuthLayout>
        )
      },
      {
        path: "write",
        element: (
          <AuthLayout authentication = {true}>
            <Write/>
          </AuthLayout>
        )
      },
      {
        path: "post/:id",
        element: (
          <AuthLayout authentication = {false}>
            <SinglePostPage/>
          </AuthLayout>
        )
      },
      {
        path: "settings",
        element: (
          <AuthLayout authentication = {true}>
            <SettingsPage/>
          </AuthLayout>
        )
      },
      {
        path: "forgotpassword",
        element: (
          <AuthLayout authentication = {true}>
            <ForgotPasswordPage/>
          </AuthLayout>
        )
      },
      {
        path: "reset-password",
        element: (
          <AuthLayout authentication = {true}>
            <ResetPasswordPage/>
          </AuthLayout>
        )
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
