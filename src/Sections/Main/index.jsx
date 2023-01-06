import React, { Component } from "react";
import "./style.css";

import profilePic from "../../assets/jenny.png";
import Slider from "../Slider";
import Footer from "../Footer";

export default class Main extends Component {
  render() {
    return (
      <div className="main-div">
        <div className="welcome-div">
          <p>Welcome back, Jenny!</p>
          <img src={profilePic} alt="" />
        </div>
        <h4>NEW GAMES </h4>
        <Slider />
        <Footer />
      </div>
    );
  }
}
