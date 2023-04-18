import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { userInfo } from "@/store/authSlice";

import React from "react";

const Private = () => {
  const user = useSelector(userInfo);
  const location = useLocation();

  return user.token ? <Outlet /> : <Navigate to="/" state={{ from: location }} replace />;
};

export default Private;
