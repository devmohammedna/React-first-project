import React, { Component } from "react";

import "./style.css";

import game from "../../assets/game+.png";
import btns from "../../assets/BUTTONS SIDE.png";
import light from "../../assets/light-dark.png";

export default class Navbar extends Component {
  render() {
    return (
      <div className="nav-div">
        <img src={game} alt="game-icon" id="game-icon" />
        <div className="nav-inner-div">
          <img src={btns} alt="btns" />
        </div>
        <img src={light} alt="theme-switch" id="switch" />
      </div>
    );
  }
}
