import React, { Component } from "react";
import Axios from "axios";
import { getArticles } from "../api";
import { Router, Link } from "@reach/router";
import { navigate } from "@reach/router";
import ArticleList from "./Article.list";

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
        <ArticleList articles={this.state.articles} />;
      </div>
    );
  }
}

export default Articles;
