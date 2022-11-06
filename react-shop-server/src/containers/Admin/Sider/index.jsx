import React from "react";
import { Layout, Menu } from "antd";
/* import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  PieChartOutlined,
} from "@ant-design/icons"; */
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
  /* let arr = target.map((item) => {
    return item.children
      ? getItem(item.title, item.path, item.icon, getMenuItem(item.children))
      : getItem(item.title, item.path, item.icon);
  }); */
  let arr = target.map((item) => {
    return getItem(
      item.title,
      item.path,
      item.icon,
      item.children
        ? item.children.map((c_item) => {
            return getItem(c_item.title, c_item.path, c_item.icon);
          })
        : null
    );
  });
  // [getItem(item.children.title, item.children.path, item.children.icon)]
  console.log(arr);
};
/* const items = [
  getItem("首页", "1", <PieChartOutlined />),
  getItem("商品", "sub1", <MailOutlined />, [
    getItem("商品分类", "2"),
    getItem("商品管理", "3"),
  ]),
  getItem("用户管理", "4", <DesktopOutlined />),
  getItem("角色管理", "5", <ContainerOutlined />),
  getItem("图形图表", "sub2", <AppstoreOutlined />, [
    getItem("折线图", "6"),
    getItem("饼状图", "7"),
  ]),
]; */
export default function AdminSider() {
  return (
    <Sider className="sider">
      <div className="sider_logo">
        <img src={logo} alt="logo" />
        <span>后台管理系统</span>
      </div>
      <div>
        <Menu
          defaultSelectedKeys={["1"]}
          // defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="dark"
          items={getMenuItem(menuConfig)}
        />
      </div>
    </Sider>
  );
}
