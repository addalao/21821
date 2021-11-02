import React, { Component } from "react";
import { Layout } from "antd";
import { Route, Redirect, Switch } from "react-router-dom";

import getUserData from "../../data/userdata";
import Letfnvu from "../../components/Admin-left-nvu";
import Header from "../../components/Admin-header";
import Category from "../commodity/CategoryManagement";
import Home from "../../pages/Home";
import User from "../../pages/User";
import Role from "../../pages/Role";
import Commodity from "../commodity/CommodityManagement";
import Opt1 from "../Chart/Opt1";
import Opt2 from "../Chart/Opt2";
export default class Admin extends Component {
  componentDidMount() {
    const userdata = getUserData();
    /* console.log(store.get("user")); */
    /* if (!userdata.user || !userdata) {
      this.props.history.replace("/login");
    } */
    console.log("删除", userdata === "a");
  }
  render() {
    const { Content } = Layout;

    return (
      <div id="admin">
        <Layout id="Layout">
          <Header />
          <Layout>
            <Letfnvu />

            <Layout>
              <Content
                className="site-layout-background exhibition"
                style={{
                  background: "rgb(221, 221, 221)",
                  padding: "5px 5px 5px 5px",
                }}
              >
                <div className="Home">
                  <div className="Home-top">
                    <span>首页</span>
                    <span>时间,\</span>
                  </div>
                  <div className="Home-buttm">home</div>
                </div>
                {/* <Switch>
                  <Route path="/admin/home" component={Home}></Route>
                  <Route path="/admin/category" component={Category}></Route>
                  <Route path="/admin/commodity" component={Commodity}></Route>
                  <Route path="/admin/user" component={User}></Route>
                  <Route path="/admin/Role" component={Role}></Route>
                  <Route path="/admin/ChartOpt1" component={Opt1}></Route>
                  <Route path="/admin/ChartOpt2" component={Opt2}></Route>
                  <Redirect to="/admin/home" />
                </Switch> */}
              </Content>
              <div id="Admin-buttm">底部</div>
            </Layout>
          </Layout>
        </Layout>
      </div>
    );
  }
}
