import React, { Component } from "react";
import List from "../../Components/List";
import Trophy from "../../Components/Trophy";
import "./style.css";

import freinds from "../../assets/FRIENDS.png";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-div">
        <List />
        <Trophy />
        <img src={freinds} id="fends" />
      </div>
    );
  }
}
