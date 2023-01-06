import React, { Component } from "react";
import "./style.css";

export default class Card extends Component {
  render() {
    return (
      <div
        className="card-div"
        style={{ backgroundImage: `url(${this.props.src})` }}
      >
        <p>{this.props.text}</p>
      </div>
    );
  }
}
