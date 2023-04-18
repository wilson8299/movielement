import React, { lazy } from "react";
import { useRoutes, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { userInfo } from "@/store/authSlice";

const Home = lazy(() => import("../page/Home"));
const Movie = lazy(() => import("../page/Movie"));
const MovieDetail = lazy(() => import("../page/MovieDetail"));
const People = lazy(() => import("../page/People"));
const PeopleDetail = lazy(() => import("../page/PeopleDetail"));
const Private = lazy(() => import("../page/Private"));
const Profile = lazy(() => import("../page/Profile"));
const UserInfo = lazy(() => import("../page/UserInfo"));
const UserFavorite = lazy(() => import("../page/UserFavorite"));
const NotFound = lazy(() => import("../page/NotFound"));

const routes = (userName) => {
  return [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/movie",
      element: <Movie />,
    },
    {
      path: "/movie/:id",
      element: <MovieDetail />,
    },
    {
      path: "/people",
      element: <People />,
    },
    {
      path: "/people/:id",
      element: <PeopleDetail />,
    },
    {
      path: `/${userName}`,
      element: <Private />,
      children: [
        {
          path: "",
          element: <Profile />,
          children: [
            { path: "info", element: <UserInfo /> },
            { path: "favorite", element: <UserFavorite /> },
          ],
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ];
};

const Router = () => {
  const user = useSelector(userInfo);
  const router = useRoutes(routes(user.name));
  return router;
};

export default Router;
