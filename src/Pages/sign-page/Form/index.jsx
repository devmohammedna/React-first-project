import React, { Component } from "react";
import Button from "../../../Components/Button";
import "./style.css";

export default class RegForm extends Component {
  render() {
    return (
      <div className="reg-form-div">
        <h3>Register Individual Account!</h3>
        <p>For the purpose of gamers regulation, your details are required.</p>
        <form className="reg-form">
          <label htmlFor="email">Email address*</label>
          <input
            required
            type="email"
            id="email"
            placeholder="Enter email address"
          />
          <label htmlFor="password">Create password*</label>
          <input
            required
            type="password"
            id="password"
            placeholder="Password"
          />
          <div className="password-strength"></div>
          <div className="str-text">
            Not bad but you know you can do it better
          </div>
          <label htmlFor="repPass">Repeat password*</label>
          <input
            required
            type="password"
            id="repPass"
            placeholder="Repeat password"
          />
          <div className="password-strength"></div>
          <div className="str-text">
            Not bad but you know you can do it better
          </div>
          <label className="check-p">
            {" "}
            <input type="checkbox" id="cheackbox" className="check" />
            <span>I agree to terms & conditions</span>
          </label>
          <Button
            name="Register Account"
            bgcolor="#1565D8"
            color="white"
            type="submit"
          />
          <Button name="login" bgcolor="#FFF" color="black" />
        </form>
      </div>
    );
  }
}
