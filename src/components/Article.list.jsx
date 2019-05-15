import React from "react";
import Articles from "./Articles";
import { Link } from "@reach/router";

export default function ArticleList({ articles, loggedInUser }) {
  return (
    <div>
      {articles.map((articles, index) => (
        <Articles articles={articles} key={index} />
      ))}
    </div>
  );
}
