import React, { useState, useEffect } from "react";
import { Button, Layout, Modal } from "antd";
import {
  FullscreenOutlined,
  FullscreenExitOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import screenfull from "screenfull";
import dayjs from "dayjs";
import { userLogout } from "../../../redux/actions/userAction";
import { menuConfig } from "../../../config/menuConfig";
const { confirm } = Modal;
const { Header } = Layout;
export default function AdminHeader() {
  const { user } = useSelector((state) => state.saveUserInfo);
  const [isFull, setIsFull] = useState(false);
  const [dayTime, setDayTime] = useState("");
  const dispatch = useDispatch();
  const location = useLocation();
  const [bread, setBread] = useState("");
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

  useEffect(() => {
    const {pathname} = location
    // console.log(pathname.split("/").indexOf("products") !== -1 ? 'products':pathname.split("/").reverse()[0]);
    // let pathKey = pathname.split("/").reverse()[0];
    let pathKey = pathname.split("/").indexOf("products") !== -1 ? 'products':pathname.split("/").reverse()[0]
    let title = "";
    menuConfig.forEach((item) => {
      if (item.children instanceof Array) {
        const tmp = item.children.find((c_item) => c_item.key === pathKey);
        if (tmp) title = tmp.title;
      } else {
        if (item.key === pathKey) title = item.title;
      }
    });
    setBread(title);
  }, [location]);
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
      centered: true,
      onOk: () => {
        dispatch(userLogout());
      },
    });
  };

  return (
    <Header className="admin_header">
      <div className="header_top" style={{ borderBottom: "1px solid #FFA500" }}>
        <Button
          size="small"
          icon={isFull ? <FullscreenOutlined /> : <FullscreenExitOutlined />}
          onClick={fullScreen}
        />
        <span className="username">欢迎，{user.userName}</span>
        <Button type="link" onClick={logOut}>
          退出登录
        </Button>
      </div>
      <div className="header_bottom">
        <div className="top_left">{bread}</div>
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
  );
}
