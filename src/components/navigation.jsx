import React, { Component } from "react";
import { Router, Link } from "@reach/router";

import "../App.css";
export default function Navigation({ topics }) {
  console.log(topics);
  return (
    <div>
      {topics.map(topic => (
        <span key={topic.slug}>
          <Link to={`/topics/${topic.slug}`}>{topic.slug}</Link>
        </span>
      ))}
      <Link to={`/topics`}>view all topics</Link>
    </div>
  );
}
