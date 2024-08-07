import React from "react";
import Login from "./Form/Login";
import { Route, Routes } from "react-router-dom";
import SignUp from "./Form/SignUp";
import Home from "./Form/Home";
import Products from "./Form/Products";

const Index = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="product/:id" element={<Products />} />
      </Routes>
    </div>
  );
};

export default Index;
