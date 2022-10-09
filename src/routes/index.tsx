import React, { lazy } from "react";
import { useRoutes } from "react-router-dom";
import AdminGuard from "../guards/admin.guard";
import AuthGuard from "../guards/auth-guard";
import NoAuthGuard from "../guards/no-auth.guard";
import Booking from "../pages/booking/booking";
// import CreateUser from "../pages/create-user/create-user";
// import EditUser from "../pages/edit-user/edit-user";
import Home from "../pages/home/home";
import Locations from "../pages/locations/locations";
import Login from "../pages/login/login";
// import UserManagement from "../pages/user-management/user-management";

/////////////////////
const ThemPhong = lazy(() => import("../modules/them-phong/them-phong"));
const CapNhatViTri = lazy(
  () => import("../modules/cap-nhat-vi-tri/cap-nhat-vi-tri")
);
const CapNhatNguoiDung = lazy(
  () => import("../modules/cap-nhat-nguoi-dung/cap-nhat-nguoi-dung")
);

const QuanLyDatPhong = lazy(
  () => import("../pages/adminpage/quan-ly-dat-phong/quan-ly-dat-phong")
);
const QuanLyPhong = lazy(
  () => import("../pages/adminpage/quan-ly-phong/quan-ly-phong")
);
const Register = lazy(() => import("../pages/adminpage/register/register"));
const HomeLayout = lazy(() => import("../layouts/home-layout"));
const AdminLayout = lazy(() => import("../layouts/admin-layout"));
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
          element: <Home />,
        },
        {
          path: "/home",
          element: <Home />,
        },

        {
          path: "/locations",
          element: <Locations />,
        },

        {
          path: "/locations/:provinceId",
          element: <Locations />,
        },

        {
          path: "/",
          element: <AuthGuard />,
          children: [
            {
              path: "/booking/:roomId",
              element: <Booking />,
            },
          ],
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
              path: "/admin/:id/editnguoidung",
              element: <CapNhatNguoiDung />,
            },
            {
              path: "/admin/themvitri",
              element: <ThemViTri />,
            },
            {
              path: "/admin/:id/editvitri",
              element: <CapNhatViTri />,
            },
            {
              path: "/admin/themphong",
              element: <ThemPhong />,
            },
          ],
        },
      ],
    },
  ]);

  return routing;
}
