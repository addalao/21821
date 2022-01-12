import React, { Component } from "react";
import { UserOutlined } from "@ant-design/icons";
import { Menu, Layout } from "antd";
import { withRouter } from "react-router";

import logo from "../../pages/Login/img/bg2.png";
import Menulist from "../../config/menuConfig";
import store from "../../redux/store";
import { changetitle } from "../../redux/app_action";
import { CHANGETITLE } from "../../redux/constS";

class letfnvu extends Component {
  componentDidMount() {
    //挂载时
    store.dispatch(
      changetitle(
        sessionStorage.getItem(CHANGETITLE) === null
          ? "首页"
          : sessionStorage.getItem(CHANGETITLE)
      )
    );
  }
  componentWillUnmount() {
    //卸载时
    sessionStorage.setItem(CHANGETITLE, "首页");
  }
  push = (pathname, title) => {
    return () => {
      //向stor存入title字符串
      store.dispatch(changetitle(title));
      if (this.props.history.location.pathname !== pathname) {
        this.props.history.push(pathname);
      }
    };
  };

  getMenuNodes = (Menulist) => {
    const { SubMenu } = Menu;

    return Menulist.map((item) => {
      if (!item.Children) {
        return (
          <Menu.Item key={item.key}>
            <div
              style={{ cursor: "pointer", width: "100%", height: "100%" }}
              onClick={this.push(item.key, item.title)}
            >
              {item.title}
            </div>
          </Menu.Item>
        );
      } else {
        const path = this.props.location.pathname;
        var citem = item.Children.find((name) => {
          return name.key === path;
        });
        if (citem) {
          this.openkey = item.key;
        }

        return (
          <SubMenu key={item.key} icon={<UserOutlined />} title={item.title}>
            {this.getMenuNodes(item.Children)}
          </SubMenu>
        );
      }
    });
  };
  /*  UNSAFE_componentWillMount() {
    this.menuNodes = this.getMenuNodes(Menulist);
  } */
  render() {
    console.log(localStorage.getItem(CHANGETITLE));
    /* const menuNodes = this.menuNodes; */
    const { Sider } = Layout;
    var path = this.props.location.pathname;
    if (path === "/admin") {
      return (path = "/admin/home");
    }

    return (
      <Sider width={200} className="site-layout-background siderbakground">
        <div id="Sider-title">
          <img src={logo} alt="图标" />
          <h2>React后台</h2>
        </div>
        <Menu
          mode="inline"
          defaultSelectedKeys={[path]}
          defaultOpenKeys={[this.openkey]}
          style={{ borderRight: 0, background: "#fafafa" }}
        >
          {this.getMenuNodes(Menulist)}
        </Menu>
      </Sider>
    );
  }
}
export default withRouter(letfnvu);
