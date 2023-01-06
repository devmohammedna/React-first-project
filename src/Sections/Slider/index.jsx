import React, { Component } from "react";
import "./style.css";

import Card from "../../Components/Card";
import gow from "../../assets/gow.jpg";
import city from "../../assets/city.jpg";
import spidy from "../../assets/spiderman.jpg";

export default class Slider extends Component {
  render() {
    return (
      <div className="slider-div">
        <Card
          src={gow}
          text={
            "Join in the new DLC with Kratos to learn more about him and his future."
          }
        />
        <Card
          src={city}
          text={
            " Be part of the Suicide Squad and kill the Justice League!-Amanda Waller"
          }
        />
        <Card
          src={spidy}
          text={
            "Miles Morales discovers powers from his mentor, Peter Parker. Master his unique, bio-electric venom blast attacks."
          }
        />
        <Card
          src={gow}
          text={
            "Join in the new DLC with Kratos to learn more about him and his future."
          }
        />
        <Card
          src={city}
          text={
            " Be part of the Suicide Squad and kill the Justice League!-Amanda Waller"
          }
        />
        <Card
          src={spidy}
          text={
            "Miles Morales discovers powers from his mentor, Peter Parker. Master his unique, bio-electric venom blast attacks."
          }
        />
      </div>
    );
  }
}
