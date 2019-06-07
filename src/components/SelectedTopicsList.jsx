import React from "react";
import { Router, Link } from "@reach/router";
import "../App.css";

export default function TopicList({ topics }) {
  console.log(topics);
  return (
    <div>
      {topics.map(topic => (
        <div>
          <Link className="alltopics" to={`/topics/${topic.slug}`}>
            {topic.slug}
          </Link>
          <p className="topicBody">{topic.body} </p>
        </div>
      ))}
    </div>
  );
}
