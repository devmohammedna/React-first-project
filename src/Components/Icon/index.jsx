import React, { Component } from "react";
import "./style.css";

export default class Icon extends Component {
  render() {
    return (
      <div className="icon">
        <img src={this.props.src} />
      </div>
    );
  }
}
