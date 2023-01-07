import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "../../../Components/Button";
import "./style.css";
import { boolean, object, ref, string } from "yup";

// const regularExpression =
//   /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

export default class RegForm extends Component {
  state = {
    email: "",
    password: "",
    repPassword: "",
    terms: false,
    valid: false,
    errors: [],
    emailerror: "",
    passworderror: "",
    reqpassworderror: "",
    repPassworderror: "",
    checkError: "",
    matchError: "",
  };

  schema = object().shape({
    email: string().email("Invalid email").required("email is required"),
    password: string()
      .min(8, "password can only be 8 characters or more")
      .required("Password is required"),
    repPassword: string()
      .oneOf([ref("password"), null], "passwords do not match")
      .required("You need to confirm password"),
    terms: boolean()
      .oneOf([true], "You need to agree to the terms and condetions")
      .required(),
  });

  handleSubmit = (e) => {
    e.preventDefault();

    this.schema
      .validate(
        {
          email: this.state.email,
          password: this.state.password,
          repPassword: this.state.repPassword,
          terms: this.state.terms,
        },
        { abortEarly: false }
      )
      .catch((e) => {
        console.log(e.errors);
        this.setState({
          error: e.errors,
        });

        this.setState({
          emailerror: this.state.error[0],
          passworderror: this.state.error[1],
          reqpassworderror: this.state.error[2],
          repPassworderror: this.state.error[3],
          checkError: this.state.error[4],
        });
        if (this.state.repPassword !== this.state.password) {
          this.setState({ matchError: "Passwords Don't Match " });
        }

        if (this.state.errors === null) {
          this.setState({ valid: true });
        }
      });
  };

  handleChangeInput = (e) => {
    const { value, id } = e.target;
    this.setState({ [id]: value });
    if (id === "terms") {
      this.state.terms
        ? this.setState({ terms: false })
        : this.setState({ terms: true });
    }
  };

  render() {
    return (
      <div className="reg-form-div">
        <h3>Register Individual Account!</h3>
        <p>For the purpose of gamers regulation, your details are required.</p>
        <form className="reg-form" onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email address*</label>
          <input
            type="email"
            value={this.state.email}
            id="email"
            placeholder="Enter email address"
            onChange={this.handleChangeInput}
          />
          {this.state.emailerror === "email is required" ? (
            <div className="error">{this.state.emailerror}</div>
          ) : (
            ""
          )}
          <label htmlFor="password">Create password*</label>
          <input
            type="password"
            value={this.state.password}
            id="password"
            placeholder="Password"
            onChange={this.handleChangeInput}
          />
          {this.state.passworderror ===
          "password can only be 8 characters or more" ? (
            <div className="error">{this.state.passworderror}</div>
          ) : (
            ""
          )}

          {this.state.reqpassworderror === "Password is required" ? (
            <div className="error">{this.state.reqpassworderror}</div>
          ) : (
            ""
          )}
          {/* <div className="password-strength"></div>
          <div className="str-text">
            Not bad but you know you can do it better
          </div> */}
          <label htmlFor="repPass">Repeat password*</label>
          <input
            type="password"
            value={this.state.repPassword}
            id="repPassword"
            placeholder="Repeat password"
            onChange={this.handleChangeInput}
          />
          <div className="error">{this.state.repPassworderror}</div>
          {/* <div className="password-strength"></div>
          <div className="str-text">
            Not bad but you know you can do it better
          </div> */}
          <label className="check-p">
            <input
              type="checkbox"
              id="terms"
              className="check"
              checked={this.state.terms}
              onChange={this.handleChangeInput}
            />
            <span>I agree to terms & conditions</span>
          </label>
          <div className="error">{this.state.checkError}</div>
          <Link to={"/Games"}>
            <Button
              name="Register Account"
              bgcolor="#1565D8"
              color="white"
              type="submit"
            />
          </Link>
          <Link to={"/Login"}>
            <Button name="login" bgcolor="#FFF" color="black" type="button" />
          </Link>
        </form>
      </div>
    );
  }
}
