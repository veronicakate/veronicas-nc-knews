import { getUser } from "../api";
import React, { Component } from "react";
import "../App.css";
class Auth extends Component {
  state = {
    userNameInput: "jessjelly",
    error: null,
    anError: false,
    isLoggedIn: false
  };
  render() {
    const { userNameInput, anError } = this.state;
    const { user, children } = this.props;
    if (user && user.username) return children;
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
          {anError && <p>invalid login username, try 'jessjelly'</p>}
          <button onClick={this.logout}> logout </button> */
        </form>
      </div>
    );
  }

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

export default Auth;
