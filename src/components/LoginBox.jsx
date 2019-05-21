import { getUser } from "../api";
import React, { Component } from "react";
import "../App.css";
class LoginBox extends Component {
  state = {
    userNameInput: ""
  };
  render() {
    return (
      <div className="login">
        <form onSubmit={this.handleSubmit}>
          <input required={true} onChange={this.handleInput} type="text" />
          <button className="LogInButton"> login!</button>
        </form>
      </div>
    );
  }
  //required true- doesnt let you move on unless you log in
  //should also have log out box
  handleInput = e => {
    this.setState({ userNameInput: e.target.value });
  };
  //handles input of loginbox

  handleSubmit = e => {
    e.preventDefault();
    getUser(this.state.userNameInput).then(validUser => {
      console.log(validUser);
      this.props.logInUser(validUser);
    });
  };
}
//handles submit of log in button

export default LoginBox;
