import React, { Component } from "react";
import { getComments, deleteComment } from "../api";
import CommentList from "./CommentList";
import Voting from "./Voting";
import { voteIt } from "../api";

class Comments extends Component {
  state = {
    comments: [],
    voteChange: 0
  };

  render() {
    const { comments, loggedInUser } = this.props;
    const { voteChange } = this.state;
    return (
      <li key={comments.comment_id} className="comments">
        <div className="votes">
          <button className="votingUp" onCLick={() => this.handleVote(1)}>
            {" "}
            Vote Up on Comments
          </button>
          <h3>{comments.votes + voteChange}</h3>
          <button className="votingDown" onCLick={() => this.handleVote(-1)}>
            {" "}
            Vote Down on Comments
          </button>
        </div>
        <div>
          <h4>{comments.author}</h4>
          {loggedInUser && loggedInUser.username === comments.author && (
            <button onClick={() => this.props.deleteComment}>Delete</button>
          )}
          <p> {comments.body}</p>
        </div>
      </li>
    );
  }
  handleVote = voteChangeInput => {
    const { comment_id } = this.state.comment;
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
}

//   componentDidMount() {
//     getComments(this.props.article_id)
//       .then(comments => {
//         this.setState({ comments: comments });
//       })
//       .catch(({ response: { data, status } }) => {});
//   }
//   updateComments = postComment => {
//     this.setState(prevState => {
//       return { comments: [postComment, ...prevState.comments] };
//     });
//   };
//   deleteComment = comment_id => {
//     this.deleteComment(comment_id);
//     this.setState(prevState => {
//       const comments = [...prevState.comments];
//       for (let i = 0; i < comments.length; i++) {
//         if (comments[i].comment_id === comment_id) comments.splice(i, 1);
//       }
//       return { comments: comments };
//     });
//   };
//   render() {
//     return (
//       <div>
//         <CommentList
//           loading={this.state.loading}
//           comments={this.state.comments}
//           loggedInUser={this.props.loggedInUser}
//           newComment={this.updateComments}
//           deleteComment={this.deleteComment}
//         />
//         {/* posted at: {convertDate(this.props.comments.created_at)} */}
//         <Voting
//           loggedInUser={this.props.loggedInUser}
//           votes={this.state.comments.votes}
//           comment_id={this.state.comments.comment_id}
//           articleId={this.state.comments.article_id}
//         />
//         )}
//       </div>
//     );
//   }
// }

export default Comments;
