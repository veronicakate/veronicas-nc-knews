import { getSingleArticle } from "../api";
import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import ArticleList from "./Article.list";
import "../App.css";
import Comments from "./Comments";

class SingleArticle extends Component {
  state = {
    article: {},
    comments: []
  };

  componentDidMount() {
    getSingleArticle(this.props.article_id).then(article => {
      this.setState({ article });
    });
  }
  render() {
    const { article } = this.state;
    const { state: locationState } = this.props.location;
    return (
      <div className="singleArticle">
        <h2 className="titleSingleArticle">{article.title}</h2>
        <p className="body"> {article.body} </p>
        <p className="topicSingle">
          {" "}
          Topic: <Link to={"/articles/topics"}> {article.topic}</Link>{" "}
        </p>
        <p className="author">Author: {article.author}</p>
        <p className="votes">Votes {article.votes}</p>
        <p className="comment_count">Comment count: {article.comment_count}</p>
        <h4 className="commentTitle">Comments..</h4>
        <Comments article_id={this.props.article_id} />
      </div>
    );
  }
}

export default SingleArticle;

/* {locationState && locationState.new && (
          <p>Congrats you just posted a new article!</p>
        )} */

//saying this.set there is an object with key of article and want to pull off value with that key but also syaing i want to call that article article- short hand for article:article
//generally want to keep the same name of things.
//giving name of state locationstate becuase another state is confusing.
