import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
import Button from "../../../Components/Button";
import axios from "axios";
import "./style.css";
import { boolean, object, ref, string } from "yup";

export default class RegForm extends Component {
  state = {
    email: "",
    name: "",
    password: "",
    repPassword: "",
    terms: false,
    errors: [" "],
    valid: false,
    finish_api: false,
  };

  schema = object().shape({
    email_val: string().email("Invalid email!").required("email is required!"),
    name_val: string().required("Name is Required!"),
    password_val: string()
      .min(8, "password can only be 8 characters or more!")
      .required("password is required!"),
    repPassword_val: string().oneOf(
      [ref("password_val"), null],
      "Passwords must match!"
    ),
    terms_val: boolean()
      .oneOf([true], "You need to agree to the terms and condetions!")
      .required(),
  });

  handleSubmit = async (e) => {
    e.preventDefault();
    this.schema
      .validate(
        {
          email_val: this.state.email,
          name_val: this.state.name,
          password_val: this.state.password,
          repPassword_val: this.state.repPassword,
          terms_val: this.state.terms,
        },
        { abortEarly: false }
      )
      .catch((e) => {
        this.setState({ errors: e.errors });
      })
      .finally(() => {
        if (this.state.errors.length == 0) {
          this.setState({ valid: true });
        }
      });
    this.setState({ errors: [] });
    if (this.state.valid) {
      try {
        const signupuser = await axios.post(
          "https://react-tt-api.onrender.com/api/users/signup",
          {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
          }
        );
      } catch (e) {
        console.log(e);
      } finally {
        console.log("success");
        this.setState({ finish_api: true });
      }
    }
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
          <label htmlFor="name">Name*</label>
          <input
            value={this.state.name}
            id="name"
            placeholder="Enter your name"
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
          <Button
            name="Register Account"
            bgcolor="#1565D8"
            color="white"
            type="submit"
          />
          {this.state.valid && this.state.finish_api ? (
            <Navigate to="/Games" />
          ) : (
            ""
          )}
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
