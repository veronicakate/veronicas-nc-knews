import React from "react";
import "../App.css";

export default function TopicList({ topic }) {
  console.log(topic);
  return (
    <div>
      {topic.map(topic => (
        <div>
          <p className="body">{topic.body} </p>
        </div>
      ))}
    </div>
  );
}
