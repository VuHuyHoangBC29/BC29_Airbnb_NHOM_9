import React, { lazy } from "react";
import { useRoutes } from "react-router-dom";
import AdminGuard from "../guards/admin.guard";
import AuthGuard from "../guards/auth-guard";
import NoAuthGuard from "../guards/no-auth.guard";
import Booking from "../pages/booking/booking";
import CreateUser from "../pages/create-user/create-user";
import EditUser from "../pages/edit-user/edit-user";
import Home from "../pages/home/home";
import Locations from "../pages/locations/locations";
import Login from "../pages/login/login";
import UserManagement from "../pages/user-management/user-management";

const Register = lazy(() => import("../pages/adminpage/register/register"));
const HomeLayout = lazy(() => import("../layouts/home-layout"));
// const Adminpage = lazy(() => import("../pages/adminpage/adminpage"));
const AdminLayout = lazy(() => import("../layouts/admin-layout"));
const ThemNguoiDung = lazy(() => import("../modules/user-form/user-form"));
const ThemViTri = lazy(() => import("../modules/them-vi-tri/them-vi-tri"));

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
              path: "/admin/user-management",
              element: <UserManagement />,
            },
            {
              path: "/admin/user-management/create-user",
              element: <CreateUser />,
            },
            {
              path: "/admin/user-management/:_id/edit-user",
              element: <EditUser />,
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
