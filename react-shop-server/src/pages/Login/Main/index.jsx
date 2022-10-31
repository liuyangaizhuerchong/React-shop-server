import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";
import { userName } from "../rules";
const { Item } = Form;
export default function Main() {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  /* const validator = (rule, value, callback) => {
    console.log(rule, value, callback);
    try {
      throw new Error("Something wrong!");
    } catch (err) {
      callback(err);
    }
  }; */
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
        <Item name="username" rules={userName}>
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="请输入您的用户名"
          />
        </Item>
        <Item
          name="password"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(new Error("Should accept agreement")),
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="请输入您的密码"
          />
        </Item>
        <Item>
          <Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>记住密码</Checkbox>
          </Item>
          <Link className="login-form-forgot" to="#">
            忘记密码
          </Link>
          <span className="forgot_reg">,</span>
          <Link className="login-form-forgot" to="#">
            立即注册
          </Link>
        </Item>

        <Item>
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </Item>
      </Form>
    </section>
  );
}
