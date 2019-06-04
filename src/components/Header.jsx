import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import "../App.css";
export default class Header extends Component {
  render() {
    return (
      <div>
        <h1 className="header">Veronica's NC Knews</h1>;
        <Link to={`/`} className="container">
          <button className="HomeLink">Home!</button>
        </Link>
      </div>
    );
  }
}
