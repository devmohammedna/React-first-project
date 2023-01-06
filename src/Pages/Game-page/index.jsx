import React, { Component } from "react";
import Navbar from "../../Components/NavBar";
import Main from "../../Sections/Main";
import "./style.css";

export default class Game extends Component {
  render() {
    return (
      <div className="game-div">
        <Navbar />
        <Main />
      </div>
    );
  }
}
