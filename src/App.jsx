import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Userinfo from "./Components/UserInfo/Userinfo";
import Main from "./Components/Main/Main";

function App() {
  return (
    <>
      <Header />
      <Userinfo />
      <Main />
    </>
  );
}

export default App;
