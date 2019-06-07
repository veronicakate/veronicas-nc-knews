import React, { Component } from "react";
import Axios from "axios";
import { getArticles } from "../api";
import { Router, Link } from "@reach/router";
import { navigate } from "@reach/router";
import ArticleList from "./Article.list";
import NewArticleForm from "./newArticleForm";
import SingleArticle from "./SingleArticle";
import DropdownPage from "./DropDownBar";
import { submitArticle } from "../api";
import Voting from "./Voting";

class Articles extends Component {
  state = {
    articles: []
    //articledeleted?
  };
  componentDidMount() {
    getArticles()
      .then(articles => {
        this.setState({ articles });
      })
      .catch(({ response: { data, status } }) => {
        console.log(data.message, status);
      });
  }
  render() {
    const { topics, user } = this.props;
    const { articles } = this.state;
    return (
      <div>
        <NewArticleForm
          topics={topics}
          user={user}
          toggleAddArticle={this.toggleAddArticle}
          path="/"
          logInUser={this.signInUser}
        />
        <DropdownPage sortArticles={this.sortArticles} path="/" />
        <ArticleList articles={this.state.articles} path="/" />
      </div>
    );
  }
  sortArticles = articles => {
    this.setState({ articles });
  };
  postArticle = (title, topic, body, username) => {
    submitArticle(title, topic, body, username).then(article => {
      this.setState(prevState => ({
        articles: [article, ...prevState.articles]
      }));
    });
  };
}
export default Articles;

//this.props.loggedInUser &&
