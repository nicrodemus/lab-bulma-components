import React, { Component } from "react";
import "./Nav.css";

class Nav extends Component {
  render() {
    return (
      <div className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
              alt="Bulma"
            />
          </a>
          <a className="navbar-item">Home</a>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field is-grouped">
              <p className="control">
                <a className="button">
                  <span className="icon">
                    <i className="fas fa-twitter" aria-hidden="true" />
                  </span>
                  <span>Login</span>
                </a>
              </p>
              <p className="control">
                <a className="button is-primary">
                  <span className="icon">
                    <i className="fas fa-download" aria-hidden="true" />
                  </span>
                  <span>Signup</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Nav;
