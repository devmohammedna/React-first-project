import React, { Component } from "react";
import "./style.css";

export default class CardL extends Component {
  render() {
    return (
      <div className="card-l">
        <img src={this.props.src} />
        <p>{this.props.text}</p>
      </div>
    );
  }
}
