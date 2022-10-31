import React from "react";
import logo from "../imgs/logo.png";
export default function Header() {
  return (
    <div className="header">
      <img src={logo} alt="" />
      <h1>React项目:后台管理系统</h1>
    </div>
  );
}
