import { getSingleArticle } from "../api";
import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import ArticleList from "./Article.list";
import "../App.css";
import Comments from "./Comments";
import { newArticle } from "./NewArticleForm";
import CommentForm from "./CommentForm";
import Voting from "./Voting";
import SelectedTopicList from "./SelectedTopicsList";
import {addVote, patchCommentVote} from "./Voting"

class SingleArticle extends Component {
  state = {
    article: {},
    comments: [],
    topic: {}
  };

  componentDidMount() {
    getSingleArticle(this.props.article_id).then(article => {
      this.setState({ article });
    });
  }
  render() {
    const { article, comments } = this.state;
    const { state: locationState } = this.props.location;
    // handlevote handledelete = props
    return (
      <article className="singleArticle">
        <div>
        {this.props.location.state && this.props.location.state.newArticle && (
          <h2>hello, you posted an article</h2>
        )}
        <h2 className="titleSingleArticle">{article.title}</h2>
        <p className="body"> {article.body} </p>
        <p> Votes:{article.votes}</p>
        <p className="topicSingle">
          {" "}
          Topic: <Link to={"/articles/topics"}> {article.topic}</Link>{" "}
        </p>
        <p className="author">Author: {article.author}</p>
        <p className="comment_count">Comment count: {article.comment_count}</p>
         <div>
{this.props.isLoggedIn === article.author && (
  <button onClick={() =>{
    handleDelete(article.article_id)
  }}
> delete article </button>
)} </div>
<p> {article.body}</p>
{props.loggedInUser && (
  <button diasabled={props.patchCommentVote === 1}
  onClick={() => {
    addVote(1)
  }}> like </button> <div>
  <button disabled={props.patchCommentVote === -1} onClick={() => {
    addVote(-1)
}} > dislike</button> )}
<h3> total likes: {article.votes + props.changevotes}</h3>
  </div>
  <div>
        <Voting votes={article.votes} article_id={article.article_id} />
        <h4 className="commentTitle">Comments..</h4>
        <Comments
          article_id={this.props.article_id}
          comments={article.article_id}
        />
        <Voting
          votes={comments.votes}
          comment_id={comments.comment_id}
          article_id={comments.article_id}
        />
        <CommentForm
          article_id={this.props.article_id}
          comment_id={article.comment_id}
          loggedInUser={this.props.loggedInUser}
          handleNewComment={this.handleNewComment}
        />
    
  

</article>
</div>
  handleNewComment = newComment => {
    const currentComment = this.state.comments;
    const restOfComments = [newComment, ...currentComment];
    this.setState(prevState => ({
      comments: (prevState.comments = restOfComments)
    }));
  };
}
  






export default SingleArticle;