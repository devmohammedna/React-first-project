import React, { Component } from "react";
import CardL from "../CardL";
import "./style.css";

import harry from "../../assets/harry.png";
import gowlogo from "../../assets/gowlogo.png";
import crash from "../../assets/crash.png";
import dying from "../../assets/dying.png";

export default class List extends Component {
  render() {
    return (
      <div className="list-div">
        <h3>last played</h3>
        <div className="games-cards-div">
          <CardL src={harry} text={" Hogwarts Legacy 50%"} />
          <CardL src={gowlogo} text={" God Of War: Ragnarök 72.5%"} />
          <CardL src={crash} text={"Crash Bandicoot N. Sane Trilogy 34%"} />
          <CardL src={dying} text={"Dying Light 2 Stay Human 100%"} />
        </div>
      </div>
    );
  }
}
