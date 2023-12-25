import React from "react";
import { Navigate, Outlet } from "react-router-dom";



const token = localStorage.getItem("token");

const ProtectPage = () => {

  return <>{token ? <Outlet/> : <Navigate to="/login" />}</>;
};

export default ProtectPage;
