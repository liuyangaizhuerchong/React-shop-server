import React from "react";
import { connect, useSelector /* useDispatch */ } from "react-redux";
import {
  /* useNavigate */
  Navigate,
  useRoutes /* Routes, Route  */,
} from "react-router-dom";
import { Layout } from "antd";
import { all_routes } from "../../routers";
import "./index.less";
const { Header, Footer, Sider, Content } = Layout;
function Admin() {
  const { isLogin } = useSelector((state) => state.saveUserInfo);
  /* const dispatch = useDispatch();
  const navigate = useNavigate(); */
  const element = useRoutes(all_routes);
  /* const logOut = () => {
    removeToken("token");
    dispatch(userLogout());
    navigate("/login", { replace: true });
  }; */
  return (
    <>
      {isLogin === true ? (
        <Layout className="admin">
          <Sider className="sider">Sider</Sider>
          <Layout>
            <Header className="header">Header</Header>
            <Content className="content">{element}</Content>
            <Footer className="footer">
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
