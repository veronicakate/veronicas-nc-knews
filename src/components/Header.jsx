import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import "../App.css";
export default class Header extends Component {
  render() {
    return (
      <div>
        <Link to={`/`} className="container">
          <button className="headerHome">Home!</button>
        </Link>

        <br />
        <br />
        <br />
        <h1 className="header">
          Veronica's
          <br /> NC
          <br />
          Knews
        </h1>
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}
