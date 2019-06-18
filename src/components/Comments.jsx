import React, { Component } from "react";
import { getComments, deleteComment } from "../api";
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
  updateComments = postComment => {
    this.setState(prevState => {
      return { comments: [postComment, ...prevState.comments] };
    });
  };
  deleteComment = comment_id => {
    this.deleteComment(comment_id);
    this.setState(prevState => {
      const comments = [...prevState.comments];
      for (let i = 0; i < comments.length; i++) {
        if (comments[i].comment_id === comment_id) comments.splice(i, 1);
      }
      return { comments: comments };
    });
  };
  render() {
    return (
      <div>
        <CommentList
          loading={this.state.loading}
          comments={this.state.comments}
          loggedInUser={this.props.loggedInUser}
          newComment={this.updateComments}
          deleteComment={this.deleteComment}
        />
        {/* posted at: {convertDate(this.props.comments.created_at)} */}
        <Voting
          loggedInUser={this.props.loggedInUser}
          votes={this.state.comments.votes}
          comment_id={this.state.comments.comment_id}
          articleId={this.state.comments.article_id}
        />
        )}
      </div>
    );
  }
}

export default Comments;
