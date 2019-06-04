//import { ReactComponent } from "*.svg";
import { submitArticle } from "../api";
import { navigate } from "@reach/router";
import React, { Component } from "react";

class NewArticleForm extends Component {
  state = {
    title: "",
    body: "",
    author: "",
    topic: ""
  };
  render() {
    console.log(this.state);
    const { body, title } = this.state;
    const { topic, author } = this.props;
    return (
      <div>
        <form className="articleForm" onSubmit={this.handleSubmit}>
          <h6>Title:</h6>{" "}
          <input
            type="text"
            name="title-input"
            id="title-input"
            onChange={this.handleChange}
          />
          <h6>Body:</h6>{" "}
          <input
            type="text"
            name="body-input"
            id="body-input"
            onChange={this.handleChange}
          />
          <h6>Author:</h6>
          <input
            onChange={this.handleChange}
            type="text"
            name="author-input"
            id="author-input"
          />
          <h6>Topic:</h6>{" "}
          <input
            onChange={this.handleChange}
            type="text"
            name="topic-input"
            id="topic-input"
          />
          <button className="articleButton">Add article</button>
        </form>
      </div>
    );
  }
  //how is this effecting the state, not adding to state.
  // handleChange = event => {
  //   const { key, value } = event.target;
  //   this.setState({ [key]: value });
  // };
  handleChange = event => {
    this.setState({ title: event.target.value });
  };
  // toggleArticle = () => {
  //   const { showAddedArticle } = this.state;
  //   this.setState({ showAddedArticle: !showAddedArticle });
  // };

  handleSubmit = event => {
    event.preventDefault();
    const { title, body, topic } = this.state;
    const username = this.props.loggedInUser;
    submitArticle({ title, body, username, topic })
      .then(article => {
        navigate(`/articles/${article.article_id}`, {
          state: { newArticle: true }
        });
      })
      .catch(err => console.error(err));
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
