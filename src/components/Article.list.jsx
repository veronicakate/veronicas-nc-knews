import React, { Component } from "react";

import { getArticles } from "../api";
import { Link } from "@reach/router";
import "../App.css";
import CommentForm from "./CommentForm";

class ArticleList extends Component {
  state = {
    articles: [],
    addArticle: false,
    sortOrder: "asc",
    topic: null,
    sortBy: "created_at",
    loggedInUser: null,
    author: null
  };

  componentDidMount() {
    getArticles().then(articles => {
      this.setState({ articles });
    });
    // .catch(({ response: { data, status } }) => {
    //   console.log(data.message, status);
  }

  componenentDidUpdate(prevProps, prevState) {
    if (
      prevState.topic !== this.state.topics ||
      prevState.sortBy !== this.state.sortBy ||
      prevState.sortOrder !== this.state.sortOrder ||
      prevState.author !== this.state.author
    ) {
      const query = {
        topic: this.state.topics,
        order: this.state.sortOrder,
        sort_by: this.state.sortBy,
        author: this.state.author
      };
      getArticles(query).then(articles => {
        this.setState({ articles: articles }).catch();
      });
    }
  }
  render() {
    return (
      <div>
        {this.state.articles.map(article => (
          <div key={article.article_id}>
            {" "}
            <Link to={`/articles/${article.article_id}`} className="link">
              <h1>{article.title} </h1>
            </Link>
            <p className="body">{article.body} </p>
            <div align="right">
              <h4 className="author"> Author: {article.author} </h4>
              <h5 className="topic">Topic: {article.topic}</h5>
              <h5 className="created_at">Created: {article.created_at}</h5>
              <Link to={`/articles/${article.article_id}`} className="link">
                <button className="commentButton">Comments</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ArticleList;
