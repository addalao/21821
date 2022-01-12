import React, { Component } from "react";
import { Route } from "react-router-dom";

import "./App.less";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Linklogin from "./pages/Linklogin";
import Register from "./pages/Register";
import { CHANGETITLE } from "./redux/constS";
/* import { Redirect } from "react-router-dom"; */
export default class App extends Component {
  componentWillUnmount() {
    localStorage.setItem(CHANGETITLE, "首页");
  }
  render() {
    return (
      <div id="app">
        <div id="Login">
          <Route path="/" exact={true} component={Linklogin}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/admin" component={Admin}></Route>
          <Route path="/register" component={Register}></Route>
        </div>
      </div>
    );
  }
}
