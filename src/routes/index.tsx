import React, { lazy } from "react";
import { useRoutes } from "react-router-dom";
import HomeLayout from "../layouts/home-layout";
import Register from "../pages/adminpage/register/register";
import Home1 from "../pages/home1/home1";
import Home2 from "../pages/home2/home2";
import Login from "../pages/login/login";

const Adminpage = lazy(() => import("../pages/adminpage/adminpage"));
const ThemNguoiDung = lazy(
  () => import("../modules/them-nguoi-dung/them-nguoi-dung")
);
const ThemViTri = lazy(() => import("../modules/them-vi-tri/them-vi-tri"));
const QuanLyNguoiDung = lazy(
  () => import("../pages/adminpage/quan-ly-nguoi-dung/quan-ly-nguoi-dung")
);
const QuanLyViTri = lazy(
  () => import("../pages/adminpage/quan-ly-vi-tri/quan-ly-vi-tri")
);

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
          path: "/admin/themnguoidung",
          element: <ThemNguoiDung />,
        },
        {
          path: "/admin/quanlyvitri",
          element: <QuanLyViTri />,
        },
        {
          path: "/admin/themvitri",
          element: <ThemViTri />,
        },
      ],
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/register",
      element:<Register/>
    }
  ]);

  return routing;
}
