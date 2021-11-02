import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import storea from "./redux/store"
import App from './App';


ReactDOM.render(
    <BrowserRouter><App /></BrowserRouter>
    , document.getElementById("root"))
storea.subscribe(() => {
    ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById("root"))
})