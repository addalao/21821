import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import store from "store";

import userdata from "./data/userdata";

import App from './App';
/* import mock from './mock' */


//从local中获取数据并存在内存中
userdata.user = store.get("user");

ReactDOM.render(
    <BrowserRouter><App /></BrowserRouter>
    , document.getElementById("root"))
