//import { ReactComponent } from "*.svg";
import { submitArticle } from "../api";
import { navigate } from "@reach/router";
import { React, Component } from "react";

class NewArticleForm extends Component {
  state = {
    title: "",
    body: "",
    author: "jessjelly",
    topic: "coding"
  };
  render() {
    const { body, title } = this.state;
    // const { topic, author } = this.props;
    return (
      <form id="articleForm" onSubmit={this.handleSubmit}>
        <button onClick={this.toggleArticle} />
        title: <input type="text" name="title-input" id="title-input" />
        body: <input type="text" name="body-input" id="body-input" />
        author: <input type="text" name="author-input" id="author-input" />
        topic: <input type="text" name="topic-input" id="topic-input" />
        <textarea
          onChange={e => this.handleChange("body", e.target.value)}
          value={body}
        />
        <button>Create my article</button>
      </form>
    );
  }

  // handleChange = event => {
  //   const { key, value } = event.target;
  //   this.setState({ [key]: value });
  // };
  handleChange = event => {
    this.setState({ [event.target.value]: event.target.value });
  };
  toggleArticle = () => {
    const { showAddedArticle } = this.state;
    this.setState({ showAddedArticle: !showAddedArticle });
  };

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
