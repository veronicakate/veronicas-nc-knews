import React from "react";

import { Link } from "@reach/router";
import "../App.css";
export default function ArticleList({ articles, loggedInUser }) {
  return (
    <div>
      {articles.map(article => (
        <div key={article.article_id}>
          {" "}
          <Link to={`/articles/${article.article_id}`} className="link">
            <h1>{article.title} </h1>
          </Link>
          <p className="body">{article.body} </p>
          <div align="right">
            <h4 className="author"> Author: {article.author} </h4>
            <h5 className="topic">Topic: {article.topic}</h5>
            <h5 className="created_at">Created: {article.created_at}</h5>
            <Link to={`/articles/${article.article_id}`} className="link">
              {/* {loggedInUser && ( */}
              <button className="commentButton">Comments</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
//
