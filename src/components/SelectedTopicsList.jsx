import React from "react";
import "../App.css";

export default function TopicList({ topics }) {
  console.log(topics);
  return (
    <div>
      {topics.map(topic => (
        <div>
          <p className="topicBody">{topic.body} </p>
        </div>
      ))}
    </div>
  );
}
