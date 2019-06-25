import React, { Component } from "react";
import { getArticles } from "../api";
class Coding extends Component {
  state = {
    articles: [],
    topics: []
  };
  componentDidMount() {
    getArticles().then(articles => {
      this.setState({ articles });
    });
    // .catch(({ response: { data, status } }) => {
    //   console.log(data.message, status);
  }
  render() {
    return (
      <div>
        {this.state.articles.map(article => (
          <div key={article.article_id}>
            {" "}
            <p className="body">{article.topic} </p>
            <div align="right">
              <h4 className="author"> Author: {article.author} </h4>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Coding;
