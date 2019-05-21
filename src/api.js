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

export const getSingleArticle = query => {
  return Axios.get(url + "articles/:article_id", { params: query }).then(
    ({ data: { article } }) => {
      return article;
    }
  );
};
//getting username on path
export const getUser = username => {
  console.log(username);
  return Axios.get(`${url}users/${username}`).then(data => {
    console.log(data);
    return username;
  });
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
