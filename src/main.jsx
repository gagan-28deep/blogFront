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
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "write",
        element: <Write />,
      },
      {
        path: "post/:id",
        element: <SinglePostPage />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
      {
        path: "forgotpassword",
        element: <ForgotPasswordPage />,
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
