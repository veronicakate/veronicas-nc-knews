import React from "react";
import "../App.css";

export default function CommentList({ comments }) {
  console.log(comments);
  return (
    <div>
      {comments.map(comment => (
        <div>
          <p className="body">{comment.body} </p>
        </div>
      ))}
    </div>
  );
}
