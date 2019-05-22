import React from "react";
import Articles from "./Articles";
import { Link } from "@reach/router";
import "../App.css";
export default function ArticleList({ articles, loggedInUser }) {
  return (
    <div>
      {articles.map((article) => (
        <div>
          {" "}
          <Link to={`/articles/${article.article_id}`} className="link">
            <h1>{article.title} </h1>
          </Link>
          
          {console.log(article)}
          <p className="body">{article.body} </p>
          <h4 className="author"> Author: {article.author} </h4>
           <h5 className="topic">Topic: {article.topic}</h5>
          <p className="created_at">Created: {article.created_at}</p>

        </div>
      ))}
    </div>
  );
}
