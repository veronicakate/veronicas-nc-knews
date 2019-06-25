import React, { Component, logo } from "react";
import { Router, Link } from "@reach/router";
import LoginBox from "./Login";

import "../App.css";

export default class Header extends Component {
  render() {
    return (
      <div>
        <Link to={`/`} className="container">
          <button className="headerHome">Home!</button>
        </Link>
        <LoginBox logInUser={this.props.signInUser} />

        <br />
        <br />
        <br />

        <h1 className="header">
          Veronica's
          <br /> NC
          <br />
          Knews
        </h1>
        <div>
          <div className="myImage"> .</div>
        </div>
        <br />

        <div />

        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}
