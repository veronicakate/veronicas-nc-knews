import { getUser } from "../api";
import React from "react";

class LoginBox extends Component {
  state = {
    userNameInput: ""
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleInput} type="text" />
        <button> login!</button>
      </form>
    );
  }

  handleInput = e => {
    this.setState({ userNameInput: e.target.value });
  };
  //handles input of loginbox

  handleSubmit = e => {
    e.preventDefault();
    getUser(this.state.userNameInput).then(validUser => {
      this.props.logInUser(validUser);
    });
  };
}
//handles submit of log in button

export default LoginBox;
