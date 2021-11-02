import React, { Component } from "react";
import { Button, Layout } from "antd";
import { withRouter } from "react-router";

import logo from "../../pages/Login/img/bg2.png";

class Adimnheader extends Component {
  delUser = () => {
    this.props.history.replace("/");
  };
  render() {
    /*    const userdata = getUserData(); */
    const { Header } = Layout;
    return (
      <Header className="header">
        <div>
          <img src={logo} alt="图标" />
          <h2>
            "登录失败"修改：src/components/Admin-header/index.jsx
            {/* {userdata.user ? userdata.user.data.username : "登陆失败"} */}
          </h2>
        </div>
        <Button onClick={this.delUser}>退出登录</Button>
      </Header>
    );
  }
}
export default withRouter(Adimnheader);
