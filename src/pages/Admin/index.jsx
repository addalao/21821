import React, { Component } from "react";
import { Layout } from "antd";
import { Route, Redirect, Switch } from "react-router-dom";

import Letfnvu from "../../components/Admin-left-nvu";
import Header from "../../components/Admin-header";
import Category from "../commodity/CategoryManagement";

import User from "../../pages/User";
import Role from "../../pages/Role";
import Commodity from "../commodity/CommodityManagement";
import Opt1 from "../Chart/Opt1";
import Opt2 from "../Chart/Opt2";
import { ceshi, ceshi2 } from "../../redux/app_action";
import store from "../../redux/store";
export default class Admin extends Component {
  demo1 = () => {
    store.dispatch(ceshi("商品......."));
  };
  demo2 = () => {
    store.dispatch(ceshi2("chengger"));
  };
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
                  <div className="Home-buttm">
                    home
                    <br />
                    <button onClick={this.demo1}>redux测试1</button>
                    <br />
                    <button onClick={this.demo2}>redux测试2</button>
                    <br />
                    <span>redux信息显示 {store.getState()}</span>
                  </div>
                </div>
                <Switch>
                  {/* <Route path="/admin/home" component={Home}></Route> */}
                  <Route path="/admin/category" component={Category}></Route>
                  <Route path="/admin/commodity" component={Commodity}></Route>
                  <Route path="/admin/user" component={User}></Route>
                  <Route path="/admin/Role" component={Role}></Route>
                  <Route path="/admin/ChartOpt1" component={Opt1}></Route>
                  <Route path="/admin/ChartOpt2" component={Opt2}></Route>
                  <Redirect to="/admin/home" />
                </Switch>
              </Content>
              <div id="Admin-buttm">底部={store.getState()}</div>
            </Layout>
          </Layout>
        </Layout>
      </div>
    );
  }
}
