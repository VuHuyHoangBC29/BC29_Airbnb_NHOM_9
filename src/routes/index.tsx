import React from "react";
import { useRoutes } from "react-router-dom";
import HomeLayout from "../layouts/home-layout";
import Home1 from "../pages/home1/home1";
import Home2 from "../pages/home2/home2";
import Login from "../pages/login/login";

export default function Router() {
  const routing = useRoutes([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          path: "/",
          element: <Home1 />,
        },
        {
          path: "/home1",
          element: <Home1 />,
        },
        {
          path: "/home2",
          element: <Home2 />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
  ]);

  return routing;
}
