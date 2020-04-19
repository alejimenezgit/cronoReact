import React, { Component } from "react";
import "./style.css";

export default class Time extends Component {
  showTime = (time) => {
    let hour = Math.floor(time / 3600);
    let minute = Math.floor((time/ 60) % 60);
    let seconds = time % 60; 
    return ` ${hour} : ${minute} : ${seconds}`;
  }

  render() {
    return (
      <div className="time">
          {this.showTime(this.props.time)}
      </div>
    );
  }
}
