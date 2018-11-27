import React, { Component } from "react";
import Nav from "./Nav.js";
import FormField from "./FormField.js";
import ReactDOM from "react-dom";
import Container from "./Container.js";

class SignUp extends Component {
  render() {
    return (
      <div>
        <Nav />
        <FormField
          label="Name"
          type="text"
          placeholder="e.g Ale Smith"
          coolButton="button is-success display"
        />

        <FormField
          label="E-mail"
          type="email"
          placeholder="e.g Alex Anna"
          coolButton=" button is-success display"
        />
        <FormField
          label="Password"
          type="password"
          placeholder="your password"
          coolButton=" button is-success "
        />
        <Container />
      </div>
    );
  }
}

export default SignUp;
