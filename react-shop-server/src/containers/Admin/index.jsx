import React from "react";
import { connect, useSelector } from "react-redux";
import { Navigate, useRoutes } from "react-router-dom";
import { Layout } from "antd";
import { all_routes } from "../../routers";
import AdminHeader from "./Header";
import AdminSider from "./Sider";
import "./index.less";

const { Footer, Content } = Layout;
function Admin() {
  const { isLogin } = useSelector((state) => state.saveUserInfo);
  const element = useRoutes(all_routes);
  return (
    <>
      {isLogin === true ? (
        <Layout className="admin">
          <AdminSider />
          <Layout>
            <AdminHeader />
            <Content className="admin_content">{element}</Content>
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
