import React, { useState, useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { Navigate, useRoutes } from "react-router-dom";
import { Layout, Button, Modal } from "antd";
import {
  FullscreenOutlined,
  FullscreenExitOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import screenfull from "screenfull";
import dayjs from "dayjs";
import { all_routes } from "../../routers";
import { userLogout } from "../../redux/actions/userAction";
import "./index.less";
const { Header, Footer, Sider, Content } = Layout;
const { confirm } = Modal;
function Admin() {
  const { isLogin, user } = useSelector((state) => state.saveUserInfo);
  const dispatch = useDispatch();
  const element = useRoutes(all_routes);
  const [isFull, setIsFull] = useState(false);
  const [dayTime, setDayTime] = useState("");
  useEffect(() => {
    setInterval(() => {
      setDayTime(dayjs().format("YYYY年 MM月DD日 HH:mm:ss"));
    }, 1000);
  }, [dayTime]);
  useEffect(() => {
    if (screenfull.isEnabled) {
      screenfull.on("change", () => {
        setIsFull(!isFull);
      });
    }
  }, [isFull]);

  const fullScreen = () => {
    if (screenfull.isEnabled) {
      screenfull.toggle();
    }
  };
  const logOut = () => {
    confirm({
      title: "警告",
      icon: <ExclamationCircleOutlined />,
      content: "确认退出吗？",
      cancelText: "取消",
      okText: "确定",
      onOk: () => {
        dispatch(userLogout());
      },
    });
  };
  return (
    <>
      {isLogin === true ? (
        <Layout className="admin">
          <Sider className="sider">Sider</Sider>
          <Layout>
            <Header className="admin_header">
              <div
                className="header_top"
                style={{ borderBottom: "1px solid #FFA500" }}
              >
                <Button
                  size="small"
                  icon={
                    isFull ? <FullscreenOutlined /> : <FullscreenExitOutlined />
                  }
                  onClick={fullScreen}
                />
                <span className="username">欢迎，{user.userName}</span>
                <Button type="link" onClick={logOut}>
                  退出登录
                </Button>
              </div>
              <div className="header_bottom">
                <div className="top_left">首页</div>
                <div className="top_right">
                  <span>{dayTime}</span>
                  <img
                    src="https://assets.msn.cn/weathermapdata/1/static/svg/72/v5_2/card_fix_partlysunny/MostlyCloudyDayV2.svg"
                    alt="天气"
                  />
                  晴<span className="admin_weather">温度：10 ~ 15°C </span>
                </div>
              </div>
            </Header>
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
