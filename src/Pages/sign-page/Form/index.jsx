import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "../../../Components/Button";
import "./style.css";
import { boolean, object, ref, string } from "yup";

const regularExpression =
  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

// /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
export default class RegForm extends Component {
  state = {
    email: "",
    password: "",
    repPassword: "",
    terms: false,
    valid: false,
  };

  schema = object().shape({
    email: string().email().required("email is required"),
    password: string()
      .min(8, "password can only be 8 characters or more")
      .matches(regularExpression)
      .required("Password is required"),
    repPassword: string()
      .oneOf([ref("password"), null])
      .required(),
    terms: boolean(true).required(),
  });

  handleSubmit = (e) => {
    e.preventDefault();
    this.schema
      .validate(
        {
          email: this.state.email,
          password: this.state.password,
          rePassword: this.state.repPassword,
          inChecked: this.state.terms,
        },
        { abortEarly: false }
      )
      .then(() => {
        this.setState({ valid: true });
      })
      .catch((e) => console.log(e.errors));
  };

  handleChangeInput = (e) => {
    const { value, id } = e.target;
    this.setState({ [id]: value, terms: true });
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
          <label htmlFor="password">Create password*</label>
          <input
            type="password"
            value={this.state.password}
            id="password"
            placeholder="Password"
            onChange={this.handleChangeInput}
          />
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
          <Link to={"/Games"}>
            <Button
              name="Register Account"
              bgcolor="#1565D8"
              color="white"
              type="submit"
            />
          </Link>

          <Link to={"/Login"}>
            <Button name="login" bgcolor="#FFF" color="black" />
          </Link>
        </form>
      </div>
    );
  }
}
