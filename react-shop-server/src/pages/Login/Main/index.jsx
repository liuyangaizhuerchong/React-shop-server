import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";
import { userName, password } from "../rules";
export default function Main() {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <section>
      <h1>用户登录</h1>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item name="username" rules={userName}>
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="请输入您的用户名"
          />
        </Form.Item>
        <Form.Item name="password" rules={password}>
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="请输入您的密码"
          />
        </Form.Item>
        <Form.Item className="remember_forgot_reg">
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>记住密码</Checkbox>
          </Form.Item>
          <Link to="#">忘记密码</Link>/<Link to="#">立即注册</Link>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
}
