import React from "react";
import { Router, Link } from "@reach/router";
import "../App.css";

export default function TopicList({ topics }) {
  return (
    <div>
      {topics.map(topic => (
        <div key={topic.slug}>
          {" "}
          <Link to={`/topics/${topic.slug}`} className="link">
            <h1>{topic.slug} </h1>
          </Link>
          <div align="right">
            <h5 className="topic">Topic: {topic.slug}</h5>

            <Link to={` / topics / ${topic.slug}`} className="link">
              {/* {loggedInUser && ( */}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
