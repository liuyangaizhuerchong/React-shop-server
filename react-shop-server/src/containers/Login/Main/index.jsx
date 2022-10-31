import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { connect, useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { testAction, test1Action } from "../../redux/actions/test_action";
import { userName, password } from "../rules";

const { Item } = Form;
function Main() {
  const test1 = useSelector((state) => state.test);
  const dispatch = useDispatch();
  console.log(test1);
  const onFinish = (values) => {
    console.log(
      dispatch(testAction(values.username)),
      dispatch(test1Action(values.password))
    );
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
        <Item name="username" rules={userName}>
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="请输入您的用户名"
          />
        </Item>
        <Item name="password" rules={password}>
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

/* export default connect((state) => ({ test1: state.test }), {
  testAction,
  test1Action,
})(Main); */
export default connect()(Main);
