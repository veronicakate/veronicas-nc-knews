import React, { Component } from "react";
import { getComments } from "../api";
import CommentList from "./CommentList";

class Comments extends Component {
  state = {
    comments: []
  };

  componentDidMount() {
    getComments(this.props.article_id)
      .then(comments => {
        this.setState({ comments });
      })
      .catch(({ response: { data, status } }) => {});
  }
  render() {
    return <CommentList comments={this.state.comments} />;
  }
}

export default Comments;
