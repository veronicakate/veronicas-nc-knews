import React, { Component } from "react";
import Axios from "axios";
import { getArticles } from "../api";
import { Router, Link } from "@reach/router";
import { navigate } from "@reach/router";
import ArticleList from "./Article.list";
import NewArticleForm from "./NewArticleForm";
import SingleArticle from "./SingleArticle";
import DropdownPage from "./DropDownBar";
import { submitArticle } from "../api";
import Voting from "./Voting";
import { Container, Form, Button } from "react-bootstrap";

class Articles extends Component {
  state = {
    articles: [],
    submitArticle: false,
    isLoading: true,
    hasErr: false,
    error: ""
    //articledeleted?
  };

  render() {
    const { articles, isLoading, hasErr, error } = this.state;
    const { topic, user } = this.props;

    return (
      <div>
        <NewArticleForm
          topics={topic}
          user={user}
          toggleAddArticle={this.toggleAddArticle}
          path="/"
          logInUser={this.signInUser}
        />
        <Voting />
        <ArticleList articles={this.state.articles} path="/" />
      </div>
    );
  }

  // componentDidMount() {
  //   getArticles()
  //     .then(articles => {
  //       this.setState({ articles });
  //     })
  //     .catch(({ response: { data, status } }) => {
  //       console.log(data.message, status);
  //     });
  // }

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
  fetchArticle = () => {
    const { topic } = this.props;
    const { error } = this.state;

    getArticles(topic)
      .then(articles => {
        this.setState({ articles, isLoading: false });
      })
      .catch(() => this.setState({ error }));
  };
  resetState = () => {
    this.setState({ hasErr: false, err: "" });
  };
}
export default Articles;
