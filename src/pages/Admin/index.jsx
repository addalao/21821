import React, { Component } from "react";
import { Layout } from "antd";
import { Route, Redirect, Switch } from "react-router-dom";
import axios from "axios";

import Letfnvu from "../../components/Admin-left-nvu";
import Header from "../../components/Admin-header";
import Category from "../commodity/CategoryManagement";

import User from "../../pages/User";
import Role from "../../pages/Role";
import Commodity from "../commodity/CommodityManagement";
import Opt1 from "../Chart/Opt1";
import Opt2 from "../Chart/Opt2";
import store from "../../redux/store";
export default class Admin extends Component {
  state = {
    weather: "",
  };

  componentDidMount() {
    axios
      .get(
        "https://restapi.amap.com/v3/weather/weatherInfo?key=f0ae5f78621c325432aa2d1bd3ce241d&city=530100"
      )
      .then(
        (respones) => {
          this.setState({
            weather: respones.data.lives[0].weather,
          });
        },
        (error) => {
          console.log(error);
        }
      );
  }

  render() {
    const { Content } = Layout;
    console.log("11", store.getState("1"));
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
                    <span>。{store.getState().adminReduceer} </span>
                    <span>时间,天气:{this.state.weather}</span>
                  </div>
                  <div className="Home-buttm">
                    home
                    <Switch>
                      <Route
                        path="/admin/category"
                        component={Category}
                      ></Route>
                      <Route
                        path="/admin/commodity"
                        component={Commodity}
                      ></Route>
                      <Route path="/admin/user" component={User}></Route>
                      <Route path="/admin/Role" component={Role}></Route>
                      <Route path="/admin/ChartOpt1" component={Opt1}></Route>
                      <Route path="/admin/ChartOpt2" component={Opt2}></Route>
                      <Redirect to="/admin/home" />
                    </Switch>
                  </div>
                </div>
              </Content>
              <div id="Admin-buttm">底部</div>
            </Layout>
          </Layout>
        </Layout>
      </div>
    );
  }
}
