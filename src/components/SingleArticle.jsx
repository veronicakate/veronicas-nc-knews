import { getSingleArticle } from "../api";
import React, { Component } from "react";
import "../App.css";
import Comments from "./Comments";
import CommentForm from "./CommentForm";
import Voting from "./Voting";

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
    return (
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
      </div>
    );
  }

  handleNewComment = newComment => {
    const currentComment = this.state.comments;
    const restOfComments = [newComment, ...currentComment];
    this.setState(prevState => ({
      comments: (prevState.comments = restOfComments)
    }));
  };
}
export default SingleArticle;
