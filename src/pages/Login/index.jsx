import React, { Component } from "react";
import { Form, Input, Button, Checkbox, message } from "antd";
import axios from "axios";
import store from "store";

export default class Login extends Component {
  render() {
    const Demo = () => {
      const onFinish = (values) => {
        const { username, password } = values;
        axios
          .post("/api/user/login", {
            username,
            password,
          })
          .then(
            (respones) => {
              const { data } = respones;
              //存储数据给local
              store.set("user", data);

              this.props.history.replace("/admin");
            },
            (error) => {
              message.error("用户名或密码不正确");
              console.log(error);
              this.props.history.replace("/admin");
            }
          );
      };

      const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
      };
      const registerUser = () => {
        this.props.history.push("/register");
      };

      return (
        <Form
          id="formsiz"
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[
              { required: true, message: "请输入账户名" },
              { min: 4, message: "账户名不得小于4位" },
              { max: 12, message: "账户名不得大于12位" },
              {
                pattern: /^[a-z A-Z0-9_]+$/,
                message: "必需由字母数字下划线组成",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[
              { required: true, message: "请输入密码" },
              { min: 3, message: "密码不得小于3位" },
              { max: 12, message: "密码不得大于12位" },
              {
                pattern: /^[a-z A-Z0-9_]+$/,
                message: "必需由字母数字下划线组成",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <div className="Itemz">
              <Checkbox>记住我</Checkbox>
              <Button type="link" onClick={registerUser}>
                注册用户
              </Button>
            </div>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      );
    };

    return (
      <div className="Login-from">
        <h1>用户登录</h1>
        <Demo />
        {/* <button onClick={this.ceshi}>查询</button> */}
      </div>
    );
  }
}
