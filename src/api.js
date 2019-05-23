import Axios from "axios";
import React from "react";

export const url = "https://bencnews.herokuapp.com/api/";
//giving url a query, such as query username
export const getArticles = query => {
  return Axios.get(url + "articles", { params: query }).then(
    ({ data: { articles } }) => {
      return articles;
    }
  );
};

export const getSingleArticle = article_id => {
  //console.log(article_id);
  return Axios.get(url + "articles/" + article_id).then(
    ({ data: { article } }) => {
      return article;
    }
  );
};
//getting username on path
export const getUser = username => {
  //console.log(username);
  return Axios.get(`${url}users/${username}`).then(data => {
    return username;
  });
};

export const getComments = article_id => {
  console.log(article_id);
  return Axios.get(url + "articles/" + article_id + "/comments").then(
    ({ data: { comments } }) => {
      console.log(comments);
      return comments;
    }
  );
};

export const getArticlesFromUsername = username => {
  return Axios.get(`${url}/users/{username}`).then(({ data: { username } }) => {
    return username;
  });
};
//body is data i want to send
export const submitArticle = body => {
  return Axios.post(`${url}/articles/`, body).then(({ data: article }) => {
    return article;
  });
};
