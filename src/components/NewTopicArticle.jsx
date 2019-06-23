import React, { Component } from "react";
import { Router, Link, navigate } from "@reach/router";
import "../App.css";
import { submitArticle, newTopic } from "../api";

class NewTopicArticle extends Component {
  state = {
    title: "",
    body: "",
    topics: [],
    err: null
  };

  componentDidMount() {
    newTopic()
      .then(topics => {
        this.setState({ topics });
      })
      .catch({});
  }

  render() {
    const { body, title } = this.state;
    const { author, topic } = this.props;
    // if (this.state.err) return <Error err={this.state.err} /> - add error page
    let titleOfTopic = "New Knews";
    return (
      <React.Fragment>
        <h3>{title}</h3>
        <ul>
          <Link to={"/"}>
            <li key="news"> News</li>
          </Link>
          {this.state.topics.map(topic => {
            return (
              <Link to={`/topics/${topic.slug}`} key={topic.slug}>
                <li>{topic.slug} </li>
              </Link>
            );
          })}
        </ul>
      </React.Fragment>
    );
  }
}

export default NewTopicArticle;
