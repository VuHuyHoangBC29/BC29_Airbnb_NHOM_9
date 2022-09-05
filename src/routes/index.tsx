import React from "react";
import { useRoutes } from "react-router-dom";
import HomeLayout from "../layouts/home-layout";
import Home1 from "../pages/home1/home1";
import Home2 from "../pages/home2/home2";

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
      ],
    },
  ]);

  return routing;
}
