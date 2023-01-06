import React, { Component } from "react";
import "./style.css";

import logo from "../../assets/blue-logo.png";
import bg2 from "../../assets/bg2.png";
import Loginform from "./Form";

export default class Login extends Component {
  render() {
    return (
      <div className="login-div">
        <div className="login-left-div">
          <img src={logo} alt="logo" />
          <div className="login-quat">
            <span>“</span>
            <p>
              I always observe the people who pass by when I ride an escalator.
              I'll never see most of them again, so I imagine a lot of things
              about their lives... about the day ahead of them.
            </p>
            <h4>Hideo Kojima</h4>
          </div>
          <img src={bg2} alt="bg" id="bg2" />
        </div>
        <div className="login-right-div">
          <Loginform />
        </div>
      </div>
    );
  }
}
