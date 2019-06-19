import { submitArticle } from "../api";
import { navigate } from "@reach/router";
import React, { Component } from "react";
import Error from "./ErrorHandling";
import NewTopic from "./NewTopics";

class NewArticleForm extends Component {
  state = {
    title: "",
    body: "",
    author: "",
    topic: "",
    showArticle: false,
    isThereAnError: false,
    error: ""
  };
  render() {
    const { body, title, showArticle, isThereAnError, error } = this.state;
    const { topics, user } = this.props;
    if (isThereAnError) return <Error error={error} />;
    return (
      <div>
        <button onClick={this.toggleArticle}>
          {" "}
          {showArticle ? "cancel" : ` Submit `}{" "}
        </button>
        {/* {showArticle && ( */}
        <form className="articleForm" onSubmit={this.handleSubmit}>
          <label>Topic:</label>
          <select id="topics" onChange={this.handleChange} name="topic">
            {topics &&
              topics.map(topic => {
                return (
                  <option key={topic.slug} value={topic.slug}>
                    {topic.slug}
                  </option>
                );
              })}
            <option key="other" value="add-topic">
              {" "}
              Add topic:
            </option>
          </select>
          {this.state.topic === "add-topic" ? (
            <NewTopic user={user} />
          ) : (
            <div>
              <label htmlFor="title" className="title">
                {" "}
                Title
              </label>
              <input
                type="text"
                value={title}
                onChange={this.handleChange}
                name="title"
                required
              />
              <label> Your article</label>
              <textarea
                rows="4"
                type="text"
                value={body}
                onChange={this.handleChange}
                name="body"
                required
              />
            </div>
          )}
          <button type="submit"> Submit Article </button>
        </form>
        )}
      </div>
    );
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  toggleArticle = () => {
    const { showArticle } = this.state;
    this.setState({ showArticle: !showArticle });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { title, body, topic } = this.state;
    const user = this.props;
    submitArticle({ title, body, user, topic }).then(article => {
      navigate(`/articles/${article.article_id}`);
    });
    this.setState({ title: "", topic: "", body: "" });
    // state: { newArticle: true }
    //     .catch(err => console.error(err));
  };
}

export default NewArticleForm;
