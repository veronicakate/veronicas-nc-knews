import React, { Component } from "react";
import Header from "./components/Header";
import Articles from "./components/Articles";
import "./App.css";
import { Router } from "@reach/router";
import SingleArticle from "./components/SingleArticle";
import Axios from "axios";
import Topics from "./components/Topics";
import { getTopics } from "./api";
import ShowError from "./components/ErrorHandling";
import Coding from "./components/CodingPage";

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
          update={this.signInUser}
          logOutUser={this.logOut}
        />

        {/* <Navigation user={loggedInUser} topics={topics} /> */}

        <Router>
          <Articles logInUser={this.loggedInUser} topics={topics} path="/" />
          <SingleArticle
            path="/articles/:article_id"
            loggedInUser={this.loggedInUser}
          />
          <Topics path="/topics" topics={topics} />
          <Coding path="/topics/coding" />
          <ShowError default />
        </Router>
      </div>
    );
  }

  componentDidMount() {
    const username = localStorage.getItem("username");
    const url = "https://bencnews.herokuapp.com/api/articles";
    const retrieved = localStorage.getItem("state");
    // if (username) {
    //   getUser(username).then(user => {
    //     this.setState({ loggedInUser: user });
    //   });

    Axios.get(url).then(({ data: { articles } }) => {
      this.setState({ articleList: articles });
    });
    this.getTopics();
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
    localStorage.setItem("username", user && user.username);
    this.setState({ loggedInUser: user });
  };

  logOut = e => {
    e.preventDefault();
    this.setState({ loggedInUser: "" });
    localStorage.removeItem("loggedInUser");
  };
}
export default App;
