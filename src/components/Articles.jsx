import React, { Component } from "react";
import Axios from "axios";
import { getArticles } from "../api";
import { Router, Link } from "@reach/router";
import {navigate} from '@reach/router'

class Articles extends Component {
  state = {
    article: [],
    loading: true,
    author: '',
    total_count: 0
    //articledeleted?
  }; 
  componentDidMount() => {
    getArticles(this.props.article_id).then(article => {
      this.setState({ article})
    }).catch(({response: {data, status}}) => {
      console.log(data.message, status)});
      navigate('/not-found', {state: {from: 'article', msg: DataTransfer.message, status}, replace: true})
  }
  render() {
    const { articles, votes } = this.setState;
    const {loaction} = this.props
    if(!article) return <p>Page is loading...</p>
    return (
      <div>
        {location.state && location.state.new} && (
          <p>Congratulations, you just posted an article</p>
        )
      </div>
    )
    // const deletedArticle = this.props.location && this.props.location.state ? this.props.location.state.articleDeleted : false;
    return (
      <section className="list">
        <h3> Loading article..</h3>) : (
        <div className="articleList">
          {articles.map(article => (
            <section key={article.article_id}>
              <Link
                className="link to article"
                to={`/articles/${article.article_id}`}
              >
                <Articles article={article} />
              </Link>
            </section>
          ))}
        </div>
        )}
      </section>
    );
  }
  componentDidMount() {
    this.fetchArticle();
  }
  fetchArticle = () => {
    const { topic } = this.props;
    getArticles(topic)
      .then(articles => {
        this.setState({ articles, loading: false });
      })
      .catch();
  };
}
handlevote = direction => {

}
export default Articles;
