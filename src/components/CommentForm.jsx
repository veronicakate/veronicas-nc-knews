import React, { Component } from "react";
import { addCommentByArticleId } from "../api";

class CommentForm extends Component {
  state = {
    comment: [],
    body: ""
  };

  render() {
    const { body } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h6> Add comment here.. </h6>
          <textarea onChange={this.handleChange}> </textarea>
          <button type="submit" onClick={this.handleSubmit}>
            {" "}
            Submit..
          </button>
        </form>
      </div>
    );
  }
  handleChange = e => {
    this.setState({ body: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { body } = this.state;
    const { article_id, newComment } = this.props;
    addCommentByArticleId(newComment);
    this.setState({ body: "" });
  };
}
export default CommentForm;
