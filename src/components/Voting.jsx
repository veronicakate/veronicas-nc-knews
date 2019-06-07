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
        <br></br>
        <p classNAme="actualVotez"> Votes: {votes + voteChange}</p>
        <button
          className="downVote"
          onClick={() => this.addVote(-1)}
          disabled={voteChange === -1}
        >
          {" "}
          No, dislike.
        </button>
      </div>
    );
  }
  addVote = direction => {
    const { article_id, comment_id } = this.props;
    if (comment_id) {
      voteIt({ comment_id, direction, article_id });
      this.setState({ voteChange: direction });
    }
  };
}
export default Voting;
