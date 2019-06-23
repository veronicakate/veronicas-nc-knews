import React from "react";
import "../App.css";
import CommentForm from "./CommentForm";

// export default function CommentList({ comments }) {
//   console.log(comments);
//   return (
//     <div>
//       {comments.map(comment => (
//         <div>
//           <p className="body">{comment.body} </p>
//         </div>
//       ))}
//     </div>
//   );
// }

const CommentList = props => {
  const { comments } = props;
  return (
    <ul>
      {" "}
      {comments.map(comment => {
        return (
          <CommentForm
            comment={comment}
            deleteComment={props.deleteComment}
            loggedInUser={props.loggedInUser}
            key={comment.comment_id}
          />
        );
      })}
    </ul>
  );
};
export default CommentList;
