import React, { Component } from "react";
import { postComment } from "../api";

class CommentForm extends Component {
  state = {
    body: "",
    comments: null,
    errComment: false
  };

  render() {
    // if (!this.props.loggedInUser) return <h2> Please log in to comment</h2>;
    const button = !!this.state.body;
    return (
      <div>
        <form
          onSubmit={this.state.comments ? this.handleSubmit : this.handleError}
        >
          <label>Comment here</label>
          <input
            onChange={this.handleInput}
            required={true}
            type="text"
            name="comment"
          />
          <input type="submit" value="submit" />
        </form>
        {this.state.errComment && <h4> comment required</h4>}
      </div>
    );
  }
  handleInput = e => {
    this.setState({ comments: e.target.value });
  };
  handleError = e => {
    e.preventDefault();
    this.setState({ errComment: true });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.setState({ errComment: false });
    const { article_id } = this.props;
    const username = this.props.loggedInUser.username;
    const body = this.state.commentInput;
    postComment({
      article_id,
      username,
      body
    }).then(comment => {
      this.updateComments(comment);
    });
    event.target.comment.value = "";
  };
  updateComments = comment => {
    this.setState(prevState => {
      return {
        comments: [comment, ...prevState.comments]
      };
    });
  };
}
export default CommentForm;
