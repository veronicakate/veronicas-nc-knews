import React, { Component } from "react";
import "../App.css";
import { Link } from "@reach/router";
const Login = ({ user, logout }) => {
  return (
    <div align="centre" className="login">
      <br />
      <form>
        <h5>Please sign in with a valid username..</h5>
        <button onClick={this.props.logOut}> Logout </button>
        <Link to={`/users`}>show all users</Link>
        />
        <button className="LogInButton" type="submit">
          {" "}
          Login!{" "}
        </button>
        {this.state.anError && <p>invalid login username, try 'jessjelly'</p>}
        <button className="LogOutButton" onClick={() => this.state.isLoggedIn}>
          {this.onClick ? "Login" : "Logout"}>
        </button>
      </form>
    </div>
  );
};
//required true- doesnt let you move on unless you log in
//should also have log out box
//   handleInput = e => {
//     this.setState({ userNameInput: e.target.value, error: null });
//   };
//   //handles input of loginbox
//   newUser = e => {
//     this.setState({ userNameInput: e.target.value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     //const { userNameInput } = this.state.userNameInput;
//     getUser(this.state.userNameInput)
//       .then(user => {
//         this.props.signInUser(user);
//       })
//       .catch(() => {
//         this.setState({ anError: true, userNameInput: "" });
//       });
//   };
// };
export default Login;
