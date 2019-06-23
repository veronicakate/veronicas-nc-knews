import React, { Component } from "react";
import { getArticles } from "../api";
import ArticleList from "./Article.list";

import { submitArticle } from "../api";
import Voting from "./Voting";
import DropdownPage from "./DropDownBar";
import NewArticleForm from "./newArticleForm";

class Articles extends Component {
  state = {
    article: {},
    submitArticle: false,
    isLoading: true,
    hasErr: false,
    error: ""
    //articledeleted?
  };

  render() {
    const { article, isLoading, hasErr, error } = this.state;
    const { topics, user } = this.props;

    return (
      <div>
        <NewArticleForm
          topics={topics}
          user={user}
          toggleAddArticle={this.toggleAddArticle}
        />{" "}
        {/* {articles.map(article => (
          <section key={article.article_id}>
            <Link to={`/articles/${article.article_id}`}>
              <ArticleList article={article} />
            </Link>
          </section> */}
        ))}
        <Voting votes={article.votes} article_id={article.article_id} />
        <DropdownPage sortArticles={this.sortArticles} />
        <ArticleList articles={article} />
      </div>
    );
  }

  componentDidMount() {
    this.fetchArticle();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.topic !== this.props.topic) this.fetchArticle();
  }

  sortArticles = articles => {
    this.setState({ articles });
  };
  postArticle = (title, topic, body, username) => {
    submitArticle(title, topic, body, username).then(article => {
      this.setState(prevState => ({
        articles: [article, ...prevState.articles]
      }));
    });
  };
  fetchArticle = () => {
    const { topic } = this.props;
    const { error } = this.state;

    getArticles(topic)
      .then(articles => {
        this.setState({ articles, isLoading: false });
      })
      .catch(() => this.setState({ error }));
  };
  resetState = () => {
    this.setState({ hasErr: false, err: "" });
  };
}
export default Articles;
