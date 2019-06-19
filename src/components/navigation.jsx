import React, { Component } from "react";
import { Router, Link } from "@reach/router";

import "../App.css";
const Navigation = ({ topics }) => {
  const newTopic = topics.slice(0, 3);
  return (
    <div>
      {newTopic.map(topic => (
        <span key={topic.slug}>
          <Link to={`/topics/${topic.slug}`}>{topic.slug}</Link>
        </span>
      ))}
      <Link to={`/topics`}>view all topics</Link>
    </div>
  );
};
export default Navigation;
