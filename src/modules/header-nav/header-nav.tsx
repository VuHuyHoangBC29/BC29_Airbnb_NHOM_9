import React, { useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import type { MenuProps } from "antd";
import { Button, Dropdown, Menu, message, Space, Tooltip } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
  DownOutlined,
  UserOutlined,
  MenuOutlined,
  HomeOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { USER_INFO_KEY } from "../../constants/common";
import {
  authenticationActions,
  loginAction,
} from "../../store/reducers/authenicationReducer";
import { UserType } from "../../enums/user";

export default function HeaderNav(): JSX.Element {
  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();

  const { userInfo: userLogin } = useSelector(
    (state: RootState) => state.authenticationReducer
  );

  console.log(userLogin);

  console.log(userLogin?.role);

  const handleLogout = () => {
    localStorage.removeItem(USER_INFO_KEY);

    dispatch(authenticationActions.handleLogout(null));

    navigate("/");
  };

  const userMenu = (
    <Menu
      items={[
        {
          label: (
            <a href="/register" style={{ textDecoration: "none" }}>
              Đăng ký
            </a>
          ),
          key: "0",
        },
        {
          label: (
            <a href="/login" style={{ textDecoration: "none" }}>
              Đăng nhập
            </a>
          ),
          key: "1",
        },
        {
          type: "divider",
        },
        {
          label: "Cho thuê nhà",
          key: "2",
        },
        {
          label: "Tổ chức trải nghiệm",
          key: "3",
        },
        {
          label: "Trợ giúp",
          key: "4",
        },
      ]}
    />
  );

  const userMenuLogin = (
    <Menu
      items={
        userLogin?.role === UserType.admin
          ? [
              {
                label: (
                  <a href="/admin" style={{ textDecoration: "none" }}>
                    Trang quản lý
                  </a>
                ),
                key: "0",
              },
              {
                label: (
                  <a href="/" style={{ textDecoration: "none" }}>
                    Thông tin tài khoản
                  </a>
                ),
                key: "1",
              },
              {
                label: (
                  <a href="/login" style={{ textDecoration: "none" }}>
                    Vé đã đặt
                  </a>
                ),
                key: "2",
              },
              {
                type: "divider",
              },
              {
                label: <div onClick={handleLogout}>Đăng xuất</div>,
                key: "3",
              },
            ]
          : [
              {
                label: (
                  <a href="/" style={{ textDecoration: "none" }}>
                    Thông tin tài khoản
                  </a>
                ),
                key: "0",
              },
              {
                label: (
                  <a href="/login" style={{ textDecoration: "none" }}>
                    Vé đã đặt
                  </a>
                ),
                key: "1",
              },
              {
                type: "divider",
              },
              {
                label: <div onClick={handleLogout}>Đăng xuất</div>,
                key: "2",
              },
            ]
      }
    />
  );

  return (
    <div>
      <Menu mode="horizontal" defaultSelectedKeys={["mail"]}>
        <Menu.Item
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          key="home"
          icon={<HomeOutlined />}
          onClick={() => navigate("/")}
        >
          Trang chủ
        </Menu.Item>
        <Menu.Item
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          key="locations"
          icon={<GlobalOutlined />}
          onClick={() => navigate("/locations")}
        >
          Địa điểm
        </Menu.Item>
        <Menu.Item key="UserMenu">
          <Dropdown
            overlay={userLogin ? userMenuLogin : userMenu}
            trigger={["click"]}
          >
            <a onClick={(e) => e.preventDefault()}>
              {userLogin ? (
                <Space>
                  {userLogin.name}
                  <UserOutlined />
                </Space>
              ) : (
                <Space>
                  <MenuOutlined />
                  <UserOutlined />
                </Space>
              )}
            </a>
          </Dropdown>
        </Menu.Item>
      </Menu>
    </div>
  );
}
