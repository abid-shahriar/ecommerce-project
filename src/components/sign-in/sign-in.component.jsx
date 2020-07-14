import React from "react";
import FormInput from "../form-input/form-input.component";

import "./sign-in.styles.scss";
import CustomButton from "../custom-button/custom-buttom.component";

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handlechange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with email and password</span>

        <form action="" onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            label="Email"
            value={this.state.email}
            onChange={this.handlechange}
          />

          <FormInput
            type="password"
            name="password"
            label="Password"
            value={this.state.password}
            onChange={this.handlechange}
          />

          <CustomButton type="submit">Sign In</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
