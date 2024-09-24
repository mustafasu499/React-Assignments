import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const FormRouter = () => {
  return !localStorage.getItem("user_Uid") ? <Outlet /> : <Navigate to={"/"} />;
};

export default FormRouter;
