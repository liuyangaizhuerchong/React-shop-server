import React from "react";
import { connect, useSelector } from "react-redux";
import { Navigate, Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import AdminHeader from "./Header";
import AdminSider from "./Sider";
import "./index.less";

import Product from "../Product";
import Category from "../Category";
import Home from "../Home";
import Line from "../Line";
import Pie from "../Pie";
import Role from "../Role";
import User from "../user";

const { Footer, Content } = Layout;
function Admin() {
  const { isLogin } = useSelector((state) => state.saveUserInfo);
  return (
    <>
      {isLogin === true ? (
        <Layout className="admin">
          <AdminSider />
          <Layout>
            <AdminHeader />
            <Content className="admin_content">
              <Routes>
                <Route path="home" element={<Home />} />
                <Route path="prod_about/category" element={<Category />} />
                <Route path="prod_about/product" element={<Product />} />
                <Route path="charts/line" element={<Line />} />
                <Route path="charts/pie" element={<Pie />} />
                <Route path="role" element={<Role />} />
                <Route path="user" element={<User />} />
              </Routes>
            </Content>
            <Footer className="admin_footer">
              请使用谷歌浏览器，以便有更佳的体验。
            </Footer>
          </Layout>
        </Layout>
      ) : (
        <Navigate to="/login" replace={true} />
      )}
    </>
  );
}
export default connect()(Admin);
