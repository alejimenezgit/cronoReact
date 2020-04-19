import React, { Component } from "react";
import Time from "../Time";
import ControllerButton from "../ControllerButton";
import "./style.css";

export default class Crono extends Component {
  state = {
    time: 0
  };

  getTime = (time) => {
    this.setState({
      time: time
  });
  }

  render() {
    const { time } = this.state;
    return (
      <div className="center">
          <Time time={time}/>
          <ControllerButton time={time} getTime={this.getTime}/>
      </div>
    );
  }
}
