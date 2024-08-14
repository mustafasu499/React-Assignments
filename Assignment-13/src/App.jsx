import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./ECommerceApp/Home.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
