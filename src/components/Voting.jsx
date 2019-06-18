import React, { Component } from "react";
import { Form, Container, Card } from "react-bootstrap";
import { voteIt } from "../api";
class Voting extends Component {
  state = {
    voteChange: 0
  };
  addVote = direction => {
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
  render() {
    return (
      <Card>
        <Container>
          <h5>total likes: {this.props.votes + this.state.voteChange}</h5>
          {this.props.loggedInUser && (
            <div>
              <button
                disabled={this.state.voteChange === -1}
                onClick={() => {
                  this.addVote(-1);
                }}
              >
                {" "}
                dislike{" "}
              </button>
              <button
                disabled={this.state.voteChange === 1}
                onClick={() => {
                  this.addVote(1);
                }}
              >
                {" "}
                like
              </button>
            </div>
          )}
        </Container>
      </Card>
    );
  }
}

export default Voting;
