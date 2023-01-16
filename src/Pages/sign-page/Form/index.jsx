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
    errors: [],
  };

  schema = object().shape({
    email_val: string().email("Invalid email").required("email is required"),
    password_val: string()
      .min(8, "password can only be 8 characters or more")
      .required("password is required"),
    repPassword_val: string().oneOf(
      [ref("password_val"), null],
      "Passwords must match"
    ),
    terms_val: boolean()
      .oneOf([true], "You need to agree to the terms and condetions")
      .required(),
  });

  handleSubmit = (e) => {
    e.preventDefault();
    this.schema
      .validate(
        {
          email_val: this.state.email,
          password_val: this.state.password,
          repPassword_val: this.state.repPassword,
          terms_val: this.state.terms,
        },
        { abortEarly: false }
      )
      .catch((e) => {
        this.setState({ errors: e.errors });
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
            value={this.state.email}
            id="email"
            placeholder="Enter email address"
            onChange={this.handleChangeInput}
          />
          <label htmlFor="password">Create password*</label>
          <input
            type="password"
            value={this.state.password}
            id="password"
            placeholder="Password"
            onChange={this.handleChangeInput}
          />
          <label htmlFor="repPassword">Repeat password*</label>
          <input
            type="password"
            value={this.state.repPassword}
            id="repPassword"
            placeholder="Repeat password"
            onChange={this.handleChangeInput}
          />
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
          <Link to={"/Games"}>
            <Button
              name="Register Account"
              bgcolor="#1565D8"
              color="white"
              type="submit"
            />
          </Link>
          <div className="error">
            {this.state.errors.map((e, index) => {
              return <li key={index}>{e}</li>;
            })}
          </div>
          <Link to={"/Login"}>
            <Button name="login" bgcolor="#FFF" color="black" type="button" />
          </Link>
        </form>
      </div>
    );
  }
}
