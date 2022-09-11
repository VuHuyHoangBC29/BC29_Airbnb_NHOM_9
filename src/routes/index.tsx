import React,{lazy} from "react";
import { useRoutes } from "react-router-dom";
import Home1 from "../pages/home1/home1";
import Home2 from "../pages/home2/home2";
import Login from "../pages/login/login";


const Register = lazy(() => import("../pages/adminpage/register/register"));
const HomeLayout = lazy(() => import("../layouts/home-layout"));
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
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return routing;
}
