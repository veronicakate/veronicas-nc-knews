import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import "../App.css";
import { newTopic } from "../api";
import NewArticleForm from "./NewArticleForm";

class NewTopic extends Component {
  state = {
    slug: "",
    description: "",
    newSlug: "",
    toggleArticle: false
  };
  render() {
    const { slug, description, newSlug, toggleArticle } = this.state;
    const { user } = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label> new topic</label>
          <input
            name="slug"
            type="text"
            value="slug"
            onChange={this.handleChange}
            required
          />
          <label onChange={this.handleChange}> topic description</label>
          <input
            name="description"
            type="text"
            value={description}
            onChange={this.handleChange}
            required
          />
          <button onClick={this.toggleNewTopic} type="submit">
            submit new topic{" "}
          </button>
        </form>
        {toggleArticle && <NewArticleForm topic={newSlug} user={user} />}
      </div>
    );
  }
  updateUserInput = (topicInfo, event) => {
    this.ListeningStateChangedEvent({ [topicInfo]: event.target.value });
  };

  toggleNewTopic = () => {
    const { toggleArticle } = this.state;
    this.setState({ toggleArticle: !toggleArticle });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { slug, description } = this.state;
    newTopic(slug, description).then(topic => {
      this.setState({ slug: "", description: "", newSlug: topic.slug });
    });
  };
}
export default NewTopic;
