import React, { Component } from "react";
import { getComments } from "../api";
import CommentList from "./CommentList";
import Voting from "./Voting";

class Comments extends Component {
  state = {
    comments: []
  };

  componentDidMount() {
    getComments(this.props.article_id)
      .then(comments => {
        this.setState({ comments: comments });
      })
      .catch(({ response: { data, status } }) => {});
  }
  updateComments = articleId => {
    getComments(articleId).then(comments => {
      this.setState({ comments: comments });
    });
    this.props.articleUpdate(articleId);
  };
  render() {
    return (
      <div>
        <CommentList
          loading={this.state.loading}
          comments={this.state.comments}
          loggedInUser={this.props.loggedInUser}
        />
        {/* posted at: {convertDate(this.props.comments.created_at)} */}
        <Voting
          loggedInUser={this.props.loggedInUser}
          votes={this.props.comments.votes}
          comment_id={this.state.comments.comment_id}
          articleId={this.state.comments.article_id}
        />
      </div>
    );
  }
}

export default Comments;
