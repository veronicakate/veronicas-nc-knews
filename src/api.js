import Axios from "axios";

export const url = "https://bencnews.herokuapp.com/api/";
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
export const newTopic = newTopic => {
  return Axios.post(url + "topics", newTopic).then(({ data: { topic } }) => {
    return topic;
  });
};
export const getSingleArticle = article_id => {
  return Axios.get(url + "articles/" + article_id).then(
    ({ data: { article } }) => {
      return article;
    }
  );
};

export const getUser = () => {
  return Axios.get(`${url}users`).then(({ data: { users } }) => {
    return users;
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
export const patchComments = (comment_id, newVote) => {
  return Axios.patch(url + `/comments/${comment_id}`, {
    inc_votes: newVote
  }).then(({ data: { comment } }) => {
    return comment.votes;
  });
};

export const deleteComment = comment_id => {
  return Axios.delete(url + "comments/" + comment_id).then(({ status }) => {
    return status;
  });
};
export const deleteArticle = article_id => {
  return Axios.delete(url, +`articles/${article_id}`);
};
export const postComment = (article_id, username, body, newComment) => {
  return Axios.post(url + "articles/" + article_id + "/comments", {
    username,
    body
  }).then(({ data: { comment } }) => {
    return comment;
  });
};

export const getArticleById = article_id => {
  return Axios.get(`${url}articles/${article_id}`).then(
    ({ data: { article } }) => {
      return article;
    }
  );
};

export const getCommentByArticleId = async article_id => {
  return Axios.get(url + "articles/" + article_id + "/comments").then(
    ({ data: { comments } }) => {
      return { comments };
    }
  );
};

export const getArticlesFromUsername = username => {
  return Axios.get(`${url}users/${username}`).then(({ data: { user } }) => {
    return user;
  });
};

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

export const voteIt = (article_id, newVote) => {
  return Axios.patch(url + `articles/${article_id}`, {
    inc_votes: newVote
  }).then(({ data: article }) => {
    return article.votes;
  });
};

export const postNewUser = (username, name, url) => {
  return Axios.post(url + "users", { username, name, url }).then(
    ({ data: { user } }) => {
      return user;
    }
  );
};
