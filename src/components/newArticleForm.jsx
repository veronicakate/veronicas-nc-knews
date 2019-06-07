//import { ReactComponent } from "*.svg";
import { submitArticle } from "../api";
import { navigate } from "@reach/router";
import React, { Component } from "react";

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
    // if (isThereAnError) return <Error error={error} />;
    return (
      <div>
        <form className="articleForm" onSubmit={this.handleSubmit}>
          <h3>Add article..</h3>
          <label className="title">
            {" "}
            <h6> Title:</h6>
          </label>
          <input
            type="text"
            name="title"
            id="title-input"
            onChange={this.handleChange}
            required
          />
          <label className="Body">
            {" "}
            <h6> Body:</h6>
          </label>
          <input
            type="text"
            name="body"
            id="body-input"
            onChange={this.handleTitleChange}
          />
          <label className="Author">
            {" "}
            <h6> Author:</h6>
          </label>
          <input
            onChange={this.handleAuthorChange}
            type="text"
            name="author"
            id="author-input"
          />
          <label>
            <h6>Select topic:</h6>
          </label>
          <select>
            <option
              type="text"
              name="topic"
              id="topic-input"
              onChange={this.handleTopicChange}
              value="football"
            >
              Football
            </option>
            <option
              type="text"
              name="topic-input"
              id="topic-input"
              onChange={this.handleTopicChange}
              value="cooking"
            >
              Cooking
            </option>
            <option
              type="text"
              name="topic-input"
              id="topic-input"
              onChange={this.handleTopicChange}
              value="coding"
            >
              Coding
            </option>
          </select>
          <br />
          <button
            type="submit"
            className="articleButton"
            onClick={this.toggleArticle}
          >
            {showArticle ? "cancel" : ` Submit `}{" "}
          </button>
        </form>
      </div>
    );
  }
  //how is this effecting the state, not adding to state.
  // handleChange = event => {
  //   const { key, value } = event.target;
  //   this.setState({ [key]: value });
  // };
  handleTitleChange = event => {
    this.setState({ title: event.target.value });
  };

  handleBodyChange = event => {
    this.setState({ body: event.target.value });
  };
  handleAuthorChange = event => {
    this.setState({ author: event.target.value });
  };
  handleTopicChange = event => {
    this.setState({ topic: event.target.value });
  };
  toggleArticle = () => {
    const { showArticle } = this.state;
    this.setState({ showAddedArticle: !showArticle });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { title, body, topic } = this.state;
    const user = this.props.loggedInUser;
    submitArticle({ title, body, user, topic }).then(article => {
      navigate(`/articles/${article.article_id}`);
    });
    this.setState({ title: "", topic: "", body: "" });
    // state: { newArticle: true }
    //     .catch(err => console.error(err));
  };
}

//     //clicked, stop more clicking, when you quickly click twice it provides same article twice
//     //key of state and object of whatever i like.
//     //generally when you recieve data you put in state
//     //in this case we are going to navigate to another page
//     //navigate state different to react state- refers to browser history state
//     //article.article id comes from data you get back.
//   })
// }

// //need to know body/title/topic to attach it to
// //need user- based on whos logged in
export default NewArticleForm;
