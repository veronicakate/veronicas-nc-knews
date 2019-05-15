import React, { Component } from "react";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import Articles from "./components/Articles";
import "./App.css";
import { Router, Link } from "@reach/router";
import LoginBox from "./components/LoginBox";
import SingleArticle from "./components/SingleArticle";
import NewArticleForm from "./components/newArticleForm";
import ArticleList from "./components/Article.list";
import Axios from "axios";
class App extends Component {
  state = {
    articleList: [],
    loggedInUser: ""
  };
  render() {
    // const { articles, loading } = this.state;
    const { loggedInUser } = this.state;
    return (
      <div className="App">
        <Header loggedInUser={this.logInUser} path="/" />
        <Router>
          <Header path="/" />

          <ArticleList path="/articles" articleList={this.state.articleList} />
          <SingleArticle path="/articles/:articleid" />
          <NewArticleForm path="/new-article" />

          <NotFound default />
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
}
// loggedInUser={loggedInUser} path="/articles" />
// logInUser = username => {
//   this.setState({ loggedInUser: username });
// };

export default App;
