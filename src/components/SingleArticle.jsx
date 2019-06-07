import { getSingleArticle } from "../api";
import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import ArticleList from "./Article.list";
import "../App.css";
import Comments from "./Comments";
import { newArticle } from "./newArticleForm";
import CommentForm from "./CommentForm";
import Voting from "./Voting";
import SelectedTopicList from "./SelectedTopicsList";

class SingleArticle extends Component {
  state = {
    article: {},
    comment: [],
    topic: {}
  };

  componentDidMount() {
    getSingleArticle(this.props.article_id).then(article => {
      this.setState({ article });
    });
  }
  render() {
    const { article, comment } = this.state;
    const { state: locationState } = this.props.location;
    return (
      <article className="singleArticle">
        {console.log(this.props)}
        {this.props.location.state && this.props.location.state.newArticle && (
          <h2>hello, you posted an article</h2>
        )}
        <h2 className="titleSingleArticle">{article.title}</h2>
        <p className="body"> {article.body} </p>
        <p className="topicSingle">
          {" "}
          Topic: <Link to={"/articles/topics"}> {article.topic}</Link>{" "}
        </p>
        <p className="author">Author: {article.author}</p>
        <p className="comment_count">Comment count: {article.comment_count}</p>
        <Voting votes={article.votes} article_id={article.article_id} />
        <h4 className="commentTitle">Comments..</h4>
        <Comments article_id={this.props.article_id} />
        {/* <Voting votes={comment.votes} comment_id={comment.comment_id} /> */}
        <CommentForm
          article_id={this.props.article_id}
          loggedInUser={this.props.loggedInUser}
        />
        {console.log(this.props)}
        {/* <SelectedTopicList topic={this.props.topic} /> */}
      </article>
    );
  }
}

export default SingleArticle;

//saying this.set there is an object with key of article and want to pull off value with that key but also syaing i want to call that article article- short hand for article:article
//generally want to keep the same name of things.
//giving name of state locationstate becuase another state is confusing.
