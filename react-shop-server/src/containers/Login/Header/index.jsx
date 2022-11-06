import React from "react";
import logo from "../../../common/logo.png";
export default function Header() {
  return (
    <div className="login_header">
      <img src={logo} alt="logo" />
      <h1>React项目:后台管理系统</h1>
    </div>
  );
}
