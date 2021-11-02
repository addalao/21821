import React, { Component } from "react";
import "./index.less";
import axios from "axios";
export default class AdminCommodity extends Component {
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
          /* respones.data.lives[0].weather; */
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
    return (
      <div className="Home">
        <div className="Home-top">
          <span>首页</span>
          <span>时间,{this.state.weather}</span>
        </div>
        <div className="Home-buttm">home</div>
      </div>
    );
  }
}
