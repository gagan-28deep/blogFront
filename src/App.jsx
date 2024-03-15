import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
import { Heder } from "./components";

function App() {
  return (
    <>
      <Heder />
      <Outlet />
    </>
  );
}

export default App;
