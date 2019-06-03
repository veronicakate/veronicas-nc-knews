import React, { Component } from "react";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import Articles from "./components/Articles";
import "./App.css";
import { Router, Link } from "@reach/router";
import Comments from "./components/Comments";
import LoginBox from "./components/LoginBox";
import LogOutBox from "./components/LogOutBox";
import SingleArticle from "./components/SingleArticle";
import NewArticleForm from "./components/newArticleForm";
import ArticleList from "./components/Article.list";
import Axios from "axios";
import ShowError from "./components/errorHandling";
import DropdownPage from "./components/DropDownBar";
import TopicList from "./components/SelectedTopicsList";

class App extends Component {
  state = {
    articleList: [],
    loggedInUser: null,
    error: false
  };

  render() {
    const { articles, loading } = this.state;
    const { loggedInUser } = this.state;

    return (
      <div className="App">
        <Header />
        <LoginBox logInUser={this.signInUser} />
        <LogOutBox />
        <DropdownPage path="/" />
        <Link to={`/`}>
          <button className="HomeLink">Go Home</button>
        </Link>
        <Router>
          <Articles logInUser={this.signInUser} path="/" />
          <SingleArticle path="/articles/:article_id" />
          <NewArticleForm path="/new-article" />
          <ShowError default path="/error" />
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
    console.log();
    this.setState({ loggedInUser: username });
  };
}

export default App;

//<ArticleList path="/articles" articleList={this.state.articleList} />
