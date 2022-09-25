import React, { lazy } from "react";
import { useRoutes } from "react-router-dom";
import AdminGuard from "../guards/admin.guard";
import NoAuthGuard from "../guards/no-auth.guard";
import Home1 from "../pages/home1/home1";
import Home2 from "../pages/home2/home2";
import Login from "../pages/login/login";

/////////////////////

const QuanLyDatPhong = lazy(
  () => import("../pages/adminpage/quan-ly-dat-phong/quan-ly-dat-phong")
);
const QuanLyPhong = lazy(
  () => import("../pages/adminpage/quan-ly-phong/quan-ly-phong")
);
const Register = lazy(() => import("../pages/adminpage/register/register"));
const HomeLayout = lazy(() => import("../layouts/home-layout"));
const AdminLayout = lazy(() => import("../layouts/admin-layout"));
const ThemNguoiDung = lazy(() => import("../modules/them-nguoi-dung/them-nguoi-dung"));
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
      path: "/",
      element: <NoAuthGuard />,
      children: [
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
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
              path: "/admin/quanlyphong",
              element: <QuanLyPhong />,
            },
            {
              path: "/admin/quanlydatphong",
              element: <QuanLyDatPhong />,
            },
            {
              path: "/admin/themnguoidung",
              element: <ThemNguoiDung />,
            },
            {
              path: "/admin/themvitri",
              element: <ThemViTri />,
            },
          ],
        },
      ],
    },
  ]);

  return routing;
}
