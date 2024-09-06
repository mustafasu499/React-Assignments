import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Form/Login";
import SignUp from "./Components/Form/SignUp";
import Home from "./Components/Screens/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="home" element={<Home />} />
    </Routes>
  );
};

export default App;
