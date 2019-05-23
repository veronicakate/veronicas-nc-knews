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
import ShowError from "./components/errorHandling";
import DropdownPage from "./components/DropDownBar";

class App extends Component {
  state = {
    articleList: [],
    loggedInUser: ""
  };
  render() {
    const { articles, loading } = this.state;
    const { loggedInUser } = this.state;
    return (
      <div className="App">
        <Header loggedInUser={this.logInUser} />
        <LoginBox logInUser={this.logInUser} />
        <DropdownPage path="/" />
        <Router>
          <Articles loggedInUser={loggedInUser} path="/" />
          <SingleArticle path="/articles/:article_id" />
          <NewArticleForm path="/new-article" />
          <ShowError default path="/error" />
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
  logInUser = username => {
    console.log("hello log in");
    this.setState({ loggedInUser: username });
  };
}

export default App;

//<ArticleList path="/articles" articleList={this.state.articleList} />
