import { getSingleArticle } from "../api";
import React, { Component } from "react";
import "../App.css";
import Comments from "./Comments";
import CommentForm from "./CommentForm";
import { voteIt } from "../api";

class SingleArticle extends Component {
  state = {
    article: {},
    comments: [],
    topic: {},
    voteChange: 0
  };

  componentDidMount() {
    getSingleArticle(this.props.article_id).then(article => {
      this.setState({ article });
    });
  }
  render() {
    const { body, votes } = this.props;
    const { article, comments } = this.state;
    const { state: locationState } = this.props.location;
    return (
      <div>
        <h2 className="titleSingleArticle">{article.title}</h2>
        <p className="body"> {article.body} </p>
        <p className="topicSingle">Topic: {article.topic}</p>
        <p className="author">Author: {article.author}</p>
        <p className="votes">Votes {article.votes}</p>
        <p className="comment_count">Comment count: {article.comment_count}</p>
        <h4 className="commentTitle">Comments..</h4>
        <div>
          <button className="votingUp" onClick={() => this.handleVote(1)}>
            {" "}
            up vote
          </button>
          <h3>{votes + this.state.voteChange}</h3>
          <button onClick={() => this.handleVote(-1)}> down vote</button>
        </div>
        <p>{body}</p>
        <Comments
          article_id={this.props.article_id}
          comments={article.article_id}
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
  handleVote = voteChangeInput => {
    const { comment_id } = this.props;
    const { voteChange } = this.state;
    if (voteChange === 0) {
      voteIt(voteChangeInput, "comments", comment_id);
      this.setState({ voteChange: voteChangeInput });
    } else if (voteChange === voteChangeInput) {
      voteIt(-voteChangeInput, "comments", comment_id);
      this.setState({ voteChange: 0 });
    } else if (voteChange !== voteChangeInput) {
      voteIt(-2 * voteChangeInput, "comments", comment_id);
      this.setState({ voteChange: voteChangeInput });
    }
  };

  // handleNewComment = newComment => {
  //   const currentComment = this.state.comments;
  //   const restOfComments = [newComment, ...currentComment];
  //   this.setState(prevState => ({
  //     comments: (prevState.comments = restOfComments)
  //   }));
  // };
}
export default SingleArticle;
