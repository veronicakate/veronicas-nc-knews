import { getUser } from "../api";
import React, { Component } from "react";
import "../App.css";
class LoginBox extends Component {
  state = {
    userNameInput: "jessjelly",
    error: null,
    anError: false,
    isLoggedIn: false
  };
  render() {
    const { userNameInput, anError } = this.state;

    return (
      <div align="centre" className="login">
        <br />
        <h5>Please sign in with a valid username..</h5>
        <form onSubmit={this.handleSubmit}>
          <input
            required={true}
            onChange={this.handleInput}
            value={userNameInput}
            type="text"
          />
          <button className="LogInButton" type="submit">
            {" "}
            Login!{" "}
          </button>

          {anError && <p>invalid login username</p>}

          <button
            className="LogOutButton"
            onClick={() => this.state.isLoggedIn}
          >
            {this.onClick ? "Login" : "Logout"}>
          </button>
        </form>
      </div>
    );
  }

  //required true- doesnt let you move on unless you log in
  //should also have log out box
  handleInput = e => {
    this.setState({ userNameInput: e.target.value, error: null });
  };
  //handles input of loginbox

  handleSubmit = e => {
    e.preventDefault();

    const { userNameInput, error } = this.state;
    getUser(userNameInput)
      .then(validUser => {
        this.props.logInUser(validUser.username);
      })
      .catch(() => {
        this.setState({ error, anError: true, userNameInput: "" });
      });
  };
}

export default LoginBox;
