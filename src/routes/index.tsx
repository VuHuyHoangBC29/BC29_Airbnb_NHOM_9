import React from "react";
import { useRoutes } from "react-router-dom";
import HomeLayout from "../layouts/home-layout";
import Adminpage from "../pages/adminpage/adminpage";
import QuanLyNguoiDung from "../pages/adminpage/quan-ly-nguoi-dung/quan-ly-nguoi-dung";
import QuanLyViTri from "../pages/adminpage/quan-ly-vi-tri/quan-ly-vi-tri";
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
    {
      path: "/admin",
      element: <Adminpage />,
      children: [
        {
          path: "/admin/quanlynguoidung",
          element: <QuanLyNguoiDung />,
        },
        {
          path: "/admin/quanlyvitri",
          element: <QuanLyViTri />,
        },
      ],
    },
  ]);

  return routing;
}
