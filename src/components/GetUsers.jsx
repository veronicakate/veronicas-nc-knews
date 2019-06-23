import React, { Component } from "react";
import { Link } from "@reach/router";

import { getAllUsers } from "../api";

export default class GetUsers extends Component {
  state = {
    users: []
  };
  render() {
    const { users } = this.state;
    return (
      <div>
        <h2> author</h2>
        <div>
          {users.map((user, index) => {
            return (
              <Link
                to={`$user.username}/articles`}
                className="Link"
                key={index}
              >
                <div key={user.username}>
                  <p>username:{user.username}</p>
                  <p> author: {user.name}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
  componentDidMount() {
    getAllUsers().then(user => {
      this.setState({ users: user });
    });
  }
}
