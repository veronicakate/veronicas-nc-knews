import Axios from "axios";
import React from "react";
const url = "https://git.heroku.com/veronicas-nc-knews.git";
//giving url a query, such a query username
export const getArticles = query => {
  return Axios.get(url + "articles", { params: query }).then(
    ({ data: { articles } }) => {
      return articles;
    }
  );
};
//getting username on path
export const getUser = username => {
  return Axios.get(`${url}/users/{username}`).then(({ data: { username } }) => {
    return username;
  });
};

export const getSingleArticle = username => {
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
