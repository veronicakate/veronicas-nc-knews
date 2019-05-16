import React from "react";
import Articles from "./Articles";
import { Link } from "@reach/router";

export default function ArticleList({ articles, loggedInUser }) {
  return (
    <div>
      {articles.map((article, index) => (
        <div>
          {" "}
          <h1>Article List..</h1>
          <Link to="/articles">
            <h3>{article.title}</h3>
          </Link>
          <h3>{article.author}</h3>
          <p>{article.body}</p>{" "}
        </div>
      ))}
    </div>
  );
}
