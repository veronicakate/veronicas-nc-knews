import React, { Component } from "react";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import Articles from "./components/Articles";
import "./App.css";
import { Router, Link } from "@reach/router";
import Comments from "./components/Comments";
import LoginBox from "./components/LoginBox";
import SingleArticle from "./components/SingleArticle";
import NewArticleForm from "./components/newArticleForm";
import ArticleList from "./components/Article.list";
import Axios from "axios";

import DropdownPage from "./components/DropDownBar";
import TopicList from "./components/SelectedTopicsList";

class App extends Component {
  state = {
    articleList: [],
    loggedInUser: "",
    error: false
  };

  render() {
    console.log(this.state.loggedInUser);
    const { articles, loading } = this.state;
    const { loggedInUser } = this.state;

    return (
      <div className="App">
        <Header path="/" />
        <LoginBox path="/" logInUser={this.signInUser} signout={this.logOut} />
        <Router>
          <Articles logInUser={this.signInUser} path="/" />
          <SingleArticle path="/articles/:article_id" />
          <NewArticleForm path="/article " logInUser={this.signInUser} />

          <TopicList path="/topic" />
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
  signInUser = username => {
    this.setState({ loggedInUser: username });
  };

  logOut = () => {
    console.log(this.state.loggedInUser);
    this.setState({ loggedInUser: "" });
  };
}

export default App;

//<ArticleList path="/articles" articleList={this.state.articleList} />
