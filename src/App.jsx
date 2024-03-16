import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
import { Footer, Heder } from "./components";

function App() {
  return (
    <>
      <Heder />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
