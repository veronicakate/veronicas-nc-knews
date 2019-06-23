import React, { Component } from "react";
import Header from "./components/Header";
import Articles from "./components/Articles";
import "./App.css";
import { Router, Link } from "@reach/router";
import SingleArticle from "./components/SingleArticle";
import Axios from "axios";
import Topics from "./components/Topics";
import { getTopics, getUser } from "./api";
import Navigation from "./components/Navigation";
import LogInBox from "./components/Login";

class App extends Component {
  state = {
    articleList: [],
    loggedInUser: null,
    error: false,
    topics: [],
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
        <LogInBox logInUser={this.signInUser} />
        {/* <Navigation user={loggedInUser} topics={topics} /> */}

        <Router>
          <Articles logInUser={this.loggedInUser} topics={topics} path="/" />

          <SingleArticle
            path="/articles/:article_id"
            loggedInUser={loggedInUser}
          />
          <Topics path="/topics" topics={topics} />
        </Router>
      </div>
    );
  }

  componentDidMount() {
    const url = "https://bencnews.herokuapp.com/api/articles";
    const retrieved = localStorage.getItem("state");
    if (retrieved) {
      this.setState(JSON.parse(retrieved));
    }
    Axios.get(url).then(({ data: { articles } }) => {
      this.setState({ articleList: articles });
    });
    this.getTopics();
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
  signInUser = loggedInUser => {
    return getUser(loggedInUser).then(loggedInUser => {
      this.setState({ loggedInUser });
    });
  };

  logOut = e => {
    e.preventDefault();
    this.setState({ loggedInUser: "" });
    localStorage.removeItem("loggedInUser");
  };
}

export default App;
