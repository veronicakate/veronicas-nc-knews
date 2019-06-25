import React from "react";
import "../App.css";
import CommentForm from "./CommentForm";
import Comments from "./Comments";

const CommentList = props => {
  const { comments } = props;
  return (
    <ul>
      {" "}
      {comments.map(comment => {
        return (
          <div>
            <Comments
              comment={comment}
              deleteComment={props.deleteComment}
              loggedInUser={props.loggedInUser}
              key={comment.comment_id}
            />
            <CommentForm
              updateComments={this.props.updateComments}
              loggedInUser={this.props.loggedInUser}
              article_id={this.props.article_id}
            />{" "}
          </div>
        );
      })}
    </ul>
  );
};
export default CommentList;
