import React from "react";
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

export default function HeaderNav(): JSX.Element {
  const navigate = useNavigate();

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
        <Menu.Item key="UserMenu">
          <Dropdown overlay={userMenu} trigger={["click"]}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <MenuOutlined />
                <UserOutlined />
              </Space>
            </a>
          </Dropdown>
        </Menu.Item>
      </Menu>
    </div>
  );
}
