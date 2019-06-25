import React, { Component } from "react";
import "../App.css";
import Comments from "./Comments";
import CommentForm from "./CommentForm";
import { getSingleArticle, voteIt, getComments } from "../api";

class SingleArticle extends Component {
  state = {
    article: {},
    comments: [],
    topic: {},
    voteChange: 0
  };

  componentDidMount() {
    getSingleArticle(this.props.article_id).then(article => {
      console.log(article);
      this.setState({ article });
    });
    getComments(this.props.article_id).then(comments => {
      this.setState({ comments: comments });
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
        <button
          size="sml"
          className="voting"
          onCLick={() => this.addVote(1)}
          disabled={this.state.voteChange === 1}
        >
          {" "}
          Like
        </button>
        <button
          className="voting"
          onCLick={() => this.addVote(-1)}
          disabled={this.state.voteChange === -1}
        >
          {" "}
          Dislike
        </button>
        <h3>{article.votes + this.props.voteChange}</h3>
        <h4 className="commentTitle">Comments..</h4>
        <div />
        <div />
        <p className="commentBody">{body}</p>
        <Comments
          article_id={this.props.article_id}
          comments={this.state.comments}
        />
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
  addVote = direction => {
    const { article_id, comment_id } = this.props;

    voteIt({ comment_id, direction, article_id });
    this.setState(prevState => {
      return { voteChange: prevState.voteChange + direction };
    });
    voteIt(this.props.comment_id, this.state.voteChange + direction).catch(
      err => {
        this.setState(prevState => {
          return { voteChange: prevState.voteChange - direction };
        });
      }
    );
  };
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
