import { getSingleArticle } from "../api";
import React, { Component } from "react";
import ArticleList from "./Article.list";

class SingleArticle extends Component {
  state = {
    article: {},
    comments: []
  };

  componentDidMount() {
    console.log(this.props.article_id);
    getSingleArticle(this.props.article_id).then(article => {
      this.setState({ article });
    });
  }
  render() {
    const { article } = this.state;
    const { state: locationState } = this.props.location;
    return (
      <div>
        <p>{article.topic}</p>
        <h2>{article.title}</h2>
        <p> {article.body} </p>
      </div>
    );
  }
}

export default SingleArticle;

/* {locationState && locationState.new && (
          <p>Congrats you just posted a new article!</p>
        )} */

//saying this.set there is an object with key of article and want to pull off value with that key but also syaing i want to call that article article- short hand for article:article
//generally want to keep the same name of things.
//giving name of state locationstate becuase another state is confusing.
