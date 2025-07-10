import React from "react";
import { Route, Routes } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";

function AppRouter() {
  return (
    <Routes>
      <Route element={<Home></Home>}>

        <Route index element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        
      </Route>
    </Routes>
  );
}

// testimonials

export default AppRouter;
