import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";

export default function HeaderNav(): JSX.Element {
  const navigate = useNavigate();

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
        >
          Home 2
        </Menu.Item>
      </Menu>
    </div>
  );
}
