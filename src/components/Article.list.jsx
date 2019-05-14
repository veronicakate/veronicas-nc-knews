import React from "react";

import {Link}


const ArticleList = ({ articles, loggedInUser}) => {
  return ( <ul> 
{
  articles.map(article => {
    return ( 
      <Link to={`/articles/}
      <li key={article.article_id}><p>{article.title}</p>{loggedInUser && <button> delete that article</button>}
  })
   </li>
}