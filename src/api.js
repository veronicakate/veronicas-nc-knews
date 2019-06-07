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
  return Axios.get(`${url}users/${username}`).then(({ data: { user } }) => {
    return user;
  });
};

export const getComments = article_id => {
  return Axios.get(url + "articles/" + article_id + "/comments").then(
    ({ data: { comments } }) => {
      console.log(comments);
      return comments;
    }
  );
};
export const getTopics = topic => {
  console.log(topic);
  return Axios.get(`${url}/topic}`).then(({ data: { topic } }) => {
    console.log(topic);
    return topic;
  });
};
export const getArticleById = article_id => {
  return Axios.get(`${url}articles/${article_id}`).then(
    ({ data: { article } }) => {
      return article;
    }
  );
};
export const addCommentByArticleId = (body, article_id, username) => {
  return Axios.post(`${url}articles/${article_id}/comments`, {
    body,
    username
  }).then(({ data: { body } }) => {
    return body;
  });
};

export const getArticlesFromUsername = username => {
  return Axios.get(`${url}/users/${username}`).then(
    ({ data: { username } }) => {
      return username;
    }
  );
};
//body is data i want to send
export const submitArticle = (title, author, body, topic) => {
  return Axios.post(`${url}/topics/${topic}/articles`, {
    title,
    body,
    author
  }).then(({ data: { article } }) => {
    return article;
  });
};
export const sortedArticles = (sort_by, order, limit) => {
  return Axios.get(
    `${url}/articles?sort_by=${sort_by}&order=${order}&limit=${limit}`
  ).then(({ data: article }) => {
    return article;
  });
};
export const voteIt = (article_id, direction, comment_id) => {
  const URL = comment_id
    ? `${url}/articles/${article_id}/comments/${comment_id}`
    : `${url}/articles/${article_id}`;
  return Axios.patch(URL, {
    inc_votes: direction
  }).then(({ data: article }) => {
    return article;
  });
};
