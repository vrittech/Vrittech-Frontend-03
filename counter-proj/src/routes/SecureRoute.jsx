import React from "react";
import { Navigate, Outlet } from "react-router-dom";
// import

const SecureRoute = () => {
  const isLoggedIn = JSON.parse(sessionStorage.getItem("isLoggedIn"));

  return <> {isLoggedIn ? <Outlet /> : <Navigate to="/" />}</>;
};

export default SecureRoute;
