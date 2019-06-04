import React, { Component } from "react";
import Axios from "axios";
import { getArticles } from "../api";
import { Router, Link } from "@reach/router";
import { navigate } from "@reach/router";
import ArticleList from "./Article.list";
import NewArticleForm from "./newArticleForm";
import SingleArticle from "./SingleArticle";
import DropdownPage from "./DropDownBar";

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
    return (
      <div>
        <NewArticleForm path="/" logInUser={this.signInUser} />
        <DropdownPage path="/" />
        <ArticleList articles={this.state.articles} path="/" />
      </div>
    );
  }
}

export default Articles;

//this.props.loggedInUser &&
