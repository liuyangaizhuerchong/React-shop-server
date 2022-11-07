import React from "react";
import { Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../common/logo.png";
import { menuConfig } from "../../../config/menuConfig";
const { Sider } = Layout;
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const getMenuItem = (target) => {
  let arr = target.map((item) => {
    return item.children
      ? getItem(
          <Link to={item.key}>{item.title}</Link>,
          item.path,
          item.icon,
          getMenuItem(item.children)
        )
      : getItem(<Link to={item.path}>{item.title}</Link>, item.path, item.icon);
  });
  return arr;
};

export default function AdminSider() {
  const pathKey = useLocation();
  const defaultSelectItem = pathKey.pathname.split("/").reverse()[0];
  const defaultOpenItem = pathKey.pathname.split("/").splice(2);
  return (
    <Sider className="sider">
      <div className="sider_logo">
        <img src={logo} alt="logo" />
        <span>后台管理系统</span>
      </div>
      <div>
        <Menu
          defaultSelectedKeys={defaultSelectItem}
          defaultOpenKeys={defaultOpenItem}
          mode="inline"
          theme="dark"
          items={getMenuItem(menuConfig)}
        />
      </div>
    </Sider>
  );
}
