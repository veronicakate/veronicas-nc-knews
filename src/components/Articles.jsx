import React, { Component } from "react";
import { getArticles } from "../api";
import ArticleList from "./Article.list";

import { submitArticle } from "../api";
import Voting from "./Voting";
import DropdownPage from "./DropDownBar";
import NewArticleForm from "./newArticleForm";

class Articles extends Component {
  state = {
    articles: [],
    comment: [],
    sort_by: null,
    submitArticle: false,
    isLoading: true,
    hasErr: false,
    error: null,
    total_count: 0
    //articledeleted?
  };

  render() {
    const { total_count, err, articles, isLoading, hasErr, error } = this.state;
    const { topics, user } = this.props;
    // if(err) return <Error err={err} /> - add error page
    return (
      <div className="articlePage">
        <div>
          <button onClick={() => this.changeSort("created_at")}> Newest</button>
          <button onClick={() => this.changeSort("votes")}>Votes</button>
          <button onClick={() => this.changeSort("comment_count")}>
            Comments
          </button>
        </div>

        <ArticleList articles={articles} />
      </div>
    );
  }

  changeSort = sort_by => {
    this.setState({ sort_by });
  };

  componentDidMount() {
    const { topic, author } = this.props;
    const { error, sort_by } = this.state;
    getArticles({ topic, author, sort_by }).then(({ articles, total_count }) =>
      this.setState({ articles, total_count })
    );
  }
  //catch error add above

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.author !== this.props.author ||
      prevProps.topic !== this.props.topic ||
      prevState.sort_by !== this.state.sort_by
    ) {
      const { topic, author } = this.props;
      const { sort_by } = this.state;
      getArticles({ topic, author, sort_by })
        .then(({ articles, total_count }) => {
          this.setState({ articles, total_count, err: null });
        })
        .catch();
    }
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

//* <NewArticleForm
//   topics={topics}
//   user={user}
//   toggleAddArticle={this.toggleAddArticle}
// />{ " " }
{
  /* {articles.map(article => (
          <section key={article.article_id}>
            <Link to={`/articles/${article.article_id}`}>
              <ArticleList article={article} />
            </Link>
          </section> */
}
//         ))
// <DropdownPage sortArticles={this.sortArticles} />
//   <ArticleList articles={article} /> */}
