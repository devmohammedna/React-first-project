import React, { Component } from "react";
import "./style.css";
import Card from "../Card";
import creed from "../../assets/creed.png";
import trophy from "../../assets/trophy.png";

export default class Trophy extends Component {
  render() {
    return (
      <div className="trophy-div">
        <h3>most recent trophy</h3>
        <Card
          src={creed}
          text={"assassin's creed odyssey last played: 34 hours ago"}
        />
        <img src={trophy} id="trophy" />
      </div>
    );
  }
}
