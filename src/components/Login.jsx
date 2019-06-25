import { getUser } from "../api";
import React, { Component } from "react";
import "../App.css";
class LoginBox extends Component {
  state = {
    userNameInput: "",
    err: null
  };
  render() {
    return (
      <div className="">
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              className="logInBox"
              required={true}
              onChange={this.handleInput}
              type="text"
              placeholder="Log in as 'jessjelly'"
            />
            <div>
              <input className="logIn" type="submit" value="log in" />
              <input
                className="logOut"
                type="submit"
                value="log out"
                onClick={() => this.setState({ userNameInput: "" })}
              />

              {this.state.err && <h5> Username not found, try 'jessjelly'</h5>}
            </div>
          </form>
        </div>
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
    const { userNameInput } = this.state;
    getUser(userNameInput)
      .then(validUser => {
        console.log(userNameInput);
        this.props.logInUser(validUser);
      })
      .catch(error => {
        // handle catch
        console.log("error:" + JSON.stringify(error));
      });
  };
}

//handles submit of log in button

export default LoginBox;
