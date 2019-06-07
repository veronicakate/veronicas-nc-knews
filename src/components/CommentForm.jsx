import React, { Component } from "react";
import { navigate } from "@reach/router";
import { addCommentByArticleId } from "../api";

class CommentForm extends Component {
  state = {
    body: ""
  };

  render() {
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
    console.log(this.props);
    const { article_id } = this.props;
    console.log(article_id);
    addCommentByArticleId(this.props.article_id, {
      body: this.state.body,
      author: this.props.user
    }).then(comment => {
      navigate(`/articles/${article_id}`);
    });

    this.setState = currentState => {
      console.log(body);
      return { comments: [body, ...currentState] };
    };
  };
}

export default CommentForm;
