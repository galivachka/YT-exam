import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";

const Layout = ({ userProp }) => {
  return (
    <>
      <Header user={userProp} />
      <Outlet />
      <Navbar user={userProp} />
    </>
  );
};

export default Layout;
