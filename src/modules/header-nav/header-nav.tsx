import React, { useEffect, useState } from "react";
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
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { USER_INFO_KEY } from "../../constants/common";
import {
  authenticationActions,
  loginAction,
} from "../../store/reducers/authenicationReducer";

import { User } from "../../interfaces/user";
import { UserType } from "../../enums/user";

export default function HeaderNav(): JSX.Element {
  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();

  const { userInfo } = useSelector(
    (state: RootState) => state.authenticationReducer
  );

  console.log(userInfo);

  const handleLogout = () => {
    localStorage.removeItem(USER_INFO_KEY);

    dispatch(authenticationActions.handleLogout(null));

    navigate("/home1");
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
        userInfo?.role === UserType.admin
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
                  <a href="/" style={{ textDecoration: "none" }}>
                    Vé đã đặt
                  </a>
                ),
                key: "2",
              },
              {
                type: "divider",
              },
              {
                label: (
                  <a href="/authguard/login" onClick={handleLogout}>
                    Đăng xuất
                  </a>
                ),
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
          key="Home1"
          icon={<MailOutlined />}
          onClick={() => navigate("/home1")}
        >
          Home 1
        </Menu.Item>
        <Menu.Item
          key="Home2"
          icon={<MailOutlined />}
          onClick={() => navigate("/home2")}
          style={{ marginRight: "auto" }}
        >
          Home 2
        </Menu.Item>
        <Menu.Item>
          <Dropdown
            overlay={userInfo !== null ? userMenuLogin : userMenu}
            trigger={["click"]}
          >
            <a onClick={(e) => e.preventDefault()}>
              {"userInfo" ? (
                <Space>
                  {/* {userInfo.name} */}
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
