import React, { Component } from "react";
import { getComments } from "../api";

class Comments extends Component {
  state = {
    article: {}
  };

  componentDidMount() {
    console.log(this.props);
    getComments(this.props).then(article => {
      this.setState({ article });
    });
  }
  render() {
    const { article } = this.state;
    const { state: locationState } = this.props.location;
    return (
      <div>
        <h2>{article.article}</h2>
      </div>
    );
  }
}

export default Comments;
