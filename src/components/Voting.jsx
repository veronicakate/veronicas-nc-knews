import React, { Component } from "react";
import { voteIt } from "../api";
class Voting extends Component {
  state = {
    voteChange: 0
  };
  render() {
    const { votes } = this.props;
    const { voteChange } = this.state;
    return (
      <div className="votes">
        <button
          className="upVote"
          onClick={() => this.addVote(1)}
          disabled={voteChange === 1}
        >
          {" "}
          Yay, thumbs up.
        </button>
        <br />

        <button
          className="downVote"
          onClick={() => this.addVote(-1)}
          disabled={voteChange === -1}
        >
          {" "}
          No, dislike.
        </button>
        <p className="actualVotez"> Votes: {votes + voteChange}</p>
      </div>
    );
  }
  addVote = direction => {
    const { article_id, comment_id } = this.props;
    voteIt({ comment_id, direction, article_id });
    this.setState(prevState => {
      return { voteChange: prevState.voteChange + direction };
    });
  };
}

export default Voting;
