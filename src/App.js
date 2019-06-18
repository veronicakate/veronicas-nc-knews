import React, { Component } from "react";
import Header from "./components/Header";
import Articles from "./components/Articles";
import "./App.css";
import { Router, Link } from "@reach/router";
import SingleArticle from "./components/SingleArticle";
import Axios from "axios";
import Topics from "./components/Topics";
import { getTopics } from "./api";
import Auth from "./components/Authentication";

class App extends Component {
  state = {
    articleList: [],
    loggedInUser: null,
    error: false,
    topics: "",
    comments: [],
    loading: false,
    body: "",
    logOut: null
  };

  render() {
    console.log(this.state.loggedInUser);
    const { articles, loading } = this.state;
    const { loggedInUser, topics } = this.state;

    return (
      <div className="App">
        <Header
          path="/"
          loggedInUser={this.state.loggedInUser}
          logOutUser={this.logOut}
        />
        <Auth user={loggedInUser} login={this.signInUser} />
        <Router>
          <Articles logInUser={this.signInUser} topics={topics} path="/" />
          <SingleArticle
            path="/articles/:article_id"
            loggedInUser={this.signInUser}
          />
          <Topics
            path="/articles/topics"
            topics={this.state.topics}
            loggedInUser={this.state.loggedInUser}
          />
        </Router>
      </div>
    );
  }

  componentDidMount() {
    const url = "https://bencnews.herokuapp.com/api/articles";
    Axios.get(url).then(({ data: { articles } }) => {
      this.setState({ articleList: articles });
    });
  }
  componentDidUpdate() {
    this.handleSave();
  }
  handleSave = () => {
    localStorage.setItem("state", JSON.stringify(this.state));
  };
  getTopics = () => {
    getTopics().then(topics => {
      this.setState({ topics });
    });
  };
  signInUser = user => {
    this.setState({ loggedInUser: user });
    localStorage.setItem("loggedInUser", user);
  };

  logOut = e => {
    e.preventDefault();
    this.setState({ loggedInUser: "" });
    localStorage.removeItem("loggedInUser");
  };
}

export default App;
