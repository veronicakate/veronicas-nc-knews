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
export const getTopics = () => {
  return Axios.get(url + "topics").then(({ data: { topics } }) => {
    return topics;
  });
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
  //console.log(username);	  //console.log(username);
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

export const getArticleById = article_id => {
  return Axios.get(`${url}articles/${article_id}`).then(
    ({ data: { article } }) => {
      return article;
    }
  );
};
// export const addCommentByArticleId = (article_id, { body, author }) => {
//   return Axios.post(url + "articles/" + article_id + "/comments", {
//     body: body,
//     username: author
//   }).then(({ data: { body } }) => {
//     return body;
//   });
// };

export const addCommentByArticleId = async (article_id, body, author) => {
  const { data } = await Axios.post(
    url + "articles/" + article_id + "/comments",
    {
      body: body
    }
  ).then(({ data: { body } }) => {
    return { body };
    //return { ...data.comment };
  });
};

export const getArticlesFromUsername = username => {
  return Axios.get(`${url}users/${username}`).then(({ data: { username } }) => {
    return username;
  });
};
//body is data i want to send
export const submitArticle = (title, author, body, topic) => {
  return Axios.post(`${url}topics/${topic}/articles`, {
    title,
    body,
    author
  }).then(({ data: { article } }) => {
    return article;
  });
};
export const sortedArticles = async (sort_by, order) => {
  const { data } = await Axios.get(
    `${url}articles?sort_by=${sort_by}&order=${order}`
  );
  return data.articles;
};

export const voteIt = (article_id, direction, comment_id) => {
  const URL = comment_id
    ? `${url}articles/${article_id}/comments/${comment_id}`
    : `${url}articles/${article_id}`;
  return Axios.patch(URL, {
    inc_votes: direction
  }).then(({ data: article }) => {
    return article;
  });
};

export const postComment = (comment, article_id) => {
  return Axios.post(url + "articles/" + article_id + "/comments", comment).then(
    ({ data: { comment } }) => {
      return comment;
    }
  );
};
