import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, message } from "antd";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { user_name, pass_word } from "../rules";
import { login_Api } from "../../../api/login";
import { userAction } from "../../../redux/actions/userAction";

const { Item } = Form;
function Main() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLogin } = useSelector((state) => state.saveUserInfo);
  const onFinish = async (values) => {
    const res = await login_Api(values);
    if (res.code === 1) {
      message.success("登录成功");
      dispatch(userAction({ user: values, token: res.data }));
      navigate("/admin", { replace: true });
    } else {
      message.warn(res.data);
    }
  };
  return (
    <>
      {isLogin === true ? (
        <Navigate to="/admin" replace={true} />
      ) : (
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
            <Item name="userName" rules={user_name}>
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="请输入您的用户名"
              />
            </Item>
            <Item name="password" rules={pass_word}>
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
      )}
    </>
  );
}

/* export default connect((state) => ({ test1: state.test }), {
  testAction,
  test1Action,
})(Main); */
export default connect()(Main);
