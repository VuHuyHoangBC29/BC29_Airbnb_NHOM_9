import React, { lazy } from "react";
import { useRoutes } from "react-router-dom";
import AdminGuard from "../guards/admin.guard";
import NoAuthGuard from "../guards/no-auth.guard";
import Home1 from "../pages/home1/home1";
import Home2 from "../pages/home2/home2";
import Login from "../pages/login/login";

const Register = lazy(() => import("../pages/adminpage/register/register"));
const HomeLayout = lazy(() => import("../layouts/home-layout"));
const AdminLayout = lazy(() => import("../layouts/admin-layout"));
const ThemNguoiDung = lazy(() => import("../modules/user-form/user-form"));
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
      path: "/authguard",
      element: <NoAuthGuard />,
      children: [
        {
          path: "/authguard/login",
          element: <Login />,
        },
        {
          path: "/authguard/register",
          element: <Register />,
        },
      ],
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          path: "/admin/",
          element: <AdminGuard />,
          children: [
            {
              path: "/admin/quanlyvitri",
              element: <QuanLyViTri />,
            },
            {
              path: "/admin/quanlynguoidung",
              element: <QuanLyNguoiDung />,
            },
            {
              path: "/admin/themvitri",
              element: <ThemViTri />,
            },
            {
              path: "/admin/themnguoidung",
              element: <ThemNguoiDung />,
            },
          ],
        },
      ],
    },
  ]);

  return routing;
}
