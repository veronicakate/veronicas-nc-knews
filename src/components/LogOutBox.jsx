import { getUser } from "../api";
import React, { Component } from "react";
import "../App.css";
class LogOutBox extends Component {
  state = {};
  render() {
    return (
      <div className="logOut">
        <form onSubmit={this.handleSubmit}>
          <button className="LogOutButton"> Logout</button>
        </form>
      </div>
    );
  }

  handleSubmit = e => {
    e.preventDefault();
    const { userNameInput } = this.state;
    getUser(userNameInput)
      .then(validUser => {
        console.log(userNameInput);
        this.props.logInUser(validUser.username);
      })
      .catch(error => {
        console.log("error:" + JSON.stringify(error));
      });
  };
}

export default LogOutBox;
