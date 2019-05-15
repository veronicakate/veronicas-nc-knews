import { getArticles } from "../api";
import React, { Component } from "react";
class SingleArticle extends Component {
  componentDidMount() {
    getArticles(this.props.article_id).then(article => {
      this.setState({ article });
    });
  }
  render() {
    const { article } = this.state;
    //saying this.set there is an object with key of article and want to pull off value with that key but also syaing i want to call that article article- short hand for article:article
    //generally want to keep the same name of things.
    const { state: locationState } = this.props.location;
    //giving name of state locationstate becuase another state is confusing.
    if (!article) return <p> Loading..</p>;
    return (
      <div>
        {locationState && locationState.new && (
          <p>Congrats you just posted a new article!</p>
        )}
        <h1>{article.title}</h1>
        <p>{article.body}</p>
      </div>
    );
  }
}

export default SingleArticle;
