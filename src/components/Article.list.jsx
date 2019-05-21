import React from "react";
import Articles from "./Articles";
import { Link } from "@reach/router";
import "../App.css";
export default function ArticleList({ articles, loggedInUser }) {
  return (
    <div>
      {articles.map((article, index) => (
        <div>
          {" "}
          <Link to={`/articles/${index}`} className="link">
            <h1>{article.title} </h1>
          </Link>
          <p className="body">{article.body} </p>
          <h4 className="author"> Author: {article.author}</h4>
        </div>
      ))}
    </div>
  );
}
