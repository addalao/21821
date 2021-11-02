import React, { Component } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

import logo from "../Login/img/bg2.png";
import getUserData from "../../data/userdata";

const userdata = getUserData();

export default class index extends Component {
  render() {
    if (userdata.user && userdata.user.code === 1) {
      return <Redirect to="/admin" />;
    }
    return (
      <header className="Login-header">
        <span>
          <img src={logo} alt="图标" />
          <h3>React项目：后台管理</h3>
        </span>
        <Button>
          <Link to="/login" className="loginbtn">
            登录
          </Link>
        </Button>
      </header>
    );
  }
}
