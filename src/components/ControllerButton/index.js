import React, { Component } from "react";
import Button from "../Button";
import "./style.css";

export default class ControllerButton extends Component {
  state = {
    time: this.props.time,
    interval: 0
  };

  start = () => {
    let interval = setInterval(() => {
        this.setState({
            time: this.state.time + 1
        });
        this.getTime();
    },1000);

    this.setState({
        interval: interval
    })
  }

  pause = () => {
    clearInterval(this.state.interval);
    this.getTime();
  }

  restart = () => {
    this.setState({
        time: 0
    })
    this.getTime();
  }

  getTime = () => {
    this.props.getTime(this.state.time)
  }

  render() {
    return (
      <div className="inLine">
          <Button action={this.start}> Start </Button> 
          <Button action={this.pause}> Pause </Button> 
          <Button action={this.restart}> Restart </Button> 
      </div>
    );
  }
}
