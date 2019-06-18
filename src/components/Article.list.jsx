import React, { Component } from "react";
import DropDownPage from "./DropDownBar";
import { getArticles } from "../api";
import { Link } from "@reach/router";
import "../App.css";

class ArticleList extends Component {
  state = {
    articles: [],
    sortOrder: "asc",
    topic: null,
    sortBy: "created_at",
    loggedInUser: null,
    author: null
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
        <DropDownPage
          handleTopic={this.handleTopic}
          handleAuthor={this.handleAuthor}
          handleOrder={this.handleOrder}
          handleSortBy={this.handleSortBy}
        />
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

  handleTopic = e => {
    this.setState({ sort_by: e.target.value });
  };
  handleSortBy = e => {
    this.setState({ sortBy: e.target.value });
  };
  handleOrder = e => {
    this.setState({ sortOrder: e.target.value });
  };
  handleAuthor = e => {
    this.setState({ author: e.target.value });
  };
}

export default ArticleList;
