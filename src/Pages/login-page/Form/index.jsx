import React, { Component } from "react";
import Icon from "../../../Components/Icon";
import "./style.css";
import Button from "../../../Components/Button";
import google from "../../../assets/google.png";
import twitter from "../../../assets/twitter.png";
import linkedin from "../../../assets/linkedin.png";
import github from "../../../assets/github.png";
import { Link } from "react-router-dom";

export default class Loginform extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChangeInput = (e) => {
    const { value, id } = e.target;
    this.setState({ [id]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.email !== "" && this.state.password !== "") {
      console.log("Valid user");
    }
  };
  render() {
    return (
      <form className="login-form" onSubmit={this.handleSubmit}>
        <h3>Join the game!</h3>
        <p>Go inside the best gamers social network!</p>
        <div className="icons-div">
          <Icon src={google} />
          <Icon src={twitter} />
          <Icon src={linkedin} />
          <Icon src={github} />
        </div>
        <label htmlFor="email" style={{ marginRight: "70px" }}>
          Your email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Write your email"
          value={this.state.email}
          onChange={this.handleChangeInput}
        />
        <label htmlFor="password">Enter your password</label>
        <input
          type="password"
          id="password"
          placeholder="•••••••••"
          value={this.state.password}
          onChange={this.handleChangeInput}
        />
        <Link to={"/Games"}>
          <Button name="Login" color="white" bgcolor="#1565D8" type="submit" />
        </Link>
        <label style={{ marginLeft: "98px" }}>
          Don’t have an account?
          <Link to={"/"}>
            <span style={{ color: "#1565D8" }}>Register</span>
          </Link>
        </label>
      </form>
    );
  }
}
