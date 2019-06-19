import React, { Component } from "react";
import { Router, Link, navigate } from "@reach/router";
import "../App.css";
import { submitArticle } from "../api";

class NewTopicArticle extends Component {
  state = {
    title: "",
    body: ""
  };
  render() {
    const { body, title } = this.state;
    const { topic } = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label> Title</label>
          <input
            type="text"
            value={title}
            onChange={this.handleChange}
            name="title"
          />
          <label>Your article</label>
          <textarea
            rows="4"
            cols="50"
            id="article"
            type="text"
            value={body}
            onChange={this.handleChange}
            name="body"
          />
          <button type="submit"> submit first article to {topic}</button>
        </form>
      </div>
    );
  }
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { title, body } = this.state;
    const { user, topic } = this.props;
    submitArticle(title, topic, body, user.username).then(article => {
      navigate(`/article/${article.article_id}`);
    });
    this.setState({ title: "", body: "" });
  };
}

export default NewTopicArticle;
