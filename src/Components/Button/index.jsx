import React, { Component } from "react";
import "./style.css";

export default class Button extends Component {
  render() {
    return (
      <div>
        <button
          className="btn"
          type={this.props.type}
          style={{
            backgroundColor: `${this.props.bgcolor}`,
            color: `${this.props.color}`,
          }}
        >
          {this.props.name}
        </button>
      </div>
    );
  }
}
