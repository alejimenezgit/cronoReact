import React, { Component } from "react";
import "./style.css";

export default class Button extends Component {
  render() {
    const { children, action } = this.props;
    return (
      <button onClick={action} >
          {children}
      </button>
    );
  }
}
