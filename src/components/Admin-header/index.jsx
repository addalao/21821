import React, { Component } from "react";
import { Button, Layout } from "antd";
import store from "store";
import { withRouter } from "react-router";

import logo from "../../pages/Login/img/bg2.png";
import getUserData from "../../data/userdata";
class Adimnheader extends Component {
  delUser = () => {
    store.remove("user");
    const userdata = getUserData();
    if (!userdata.user || !userdata) {
      this.props.history.replace("/");
    }
    console.log(userdata);
  };
  render() {
    const userdata = getUserData();
    const { Header } = Layout;
    return (
      <Header className="header">
        <div>
          <img src={logo} alt="图标" />
          <h2>
            hello,
            {userdata.user ? userdata.user.data.username : "登陆失败"}
          </h2>
        </div>
        <Button onClick={this.delUser}>退出登录</Button>
      </Header>
    );
  }
}
export default withRouter(Adimnheader);
