import React, { Component } from "react";

import "./style.css";
import RegForm from "./Form";

import logo from "../../assets/logo.png";
import corner from "../../assets/corner.png";
import google from "../../assets/google.png";
import { Link } from "react-router-dom";

export default class Register extends Component {
  render() {
    return (
      <div className="reg-div">
        <div className="reg-left-div">
          <div className="bg-color">
            <img src={logo} alt="logo" id="logo-1" />
            <div className="quate-div">
              <span>“</span>
              <p>
                I always observe the people who pass by when I ride an
                escalator. I'll never see most of them again, so I imagine a lot
                of things about their lives... about the day ahead of them.
              </p>
              <h4>Hideo Kojima</h4>
              <img src={corner} alt="corner" id="corner" />
            </div>
          </div>
        </div>
        <div className="reg-right-div">
          <Link to={"/Login"}>
            <p> &#60; Back</p>
          </Link>
          <RegForm />
          <img src={google} alt="google" id="google" />
        </div>
      </div>
    );
  }
}
