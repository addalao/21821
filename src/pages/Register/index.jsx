import React, { Component } from "react";
import { Form, Input, Button, message } from "antd";
import axios from "axios";

export default class Register extends Component {
  ceshi = () => {
    axios.get("/api/user/getUsers").then(
      (respones) => {
        console.log(respones);
      },
      (error) => {
        console.log(error);
      }
    );
  };
  render() {
    this.ceshi();
    const Demo = () => {
      const onFinish = (values) => {
        const { username, password } = values;
        axios
          .post("/api/user/register", {
            username,
            password,
          })
          .then(
            (respones) => {
              console.log(respones);
              const { data } = respones;
              if (data.code === 1) {
                message.success(data.message);
              }
            },
            (error) => {
              console.log(error);
            }
          );
      };

      const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
      };

      return (
        <Form
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
              { required: true, message: "请输入账户名" },
              { min: 4, message: "账户名不得小于4位" },
              { max: 12, message: "账户名不得大于12位" },
              {
                pattern: /^[a-z A-Z0-9_]+$/,
                message: "必需由字母数字下划线组成",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        </Form>
      );
    };
    return (
      <div id="Register">
        <h1>注册用户</h1>
        <Demo />
      </div>
    );
  }
}
