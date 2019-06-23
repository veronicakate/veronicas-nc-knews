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
    return comments.map(comment => {
      return (
        <li key={comment.comment_id} className="commentBoxes">
          <div className="votes">
            <p> {comment.body}</p>
            <p> Author of comment: {comment.author} </p>

            <button
              size="sml"
              className="voting"
              onCLick={() => this.handleVote(1)}
            >
              {" "}
              Like
            </button>

            <button className="voting" onCLick={() => this.handleVote(-1)}>
              {" "}
              Dislike
            </button>
            <h3>{comment.votes + voteChange}</h3>
          </div>
          <div>
            {loggedInUser && loggedInUser.username === comment.author && (
              <button onClick={() => this.props.deleteComment}>Delete</button>
            )}
          </div>
        </li>
      );
    });
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
