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
    const { topic, user } = this.props;
    return (
      <div>
        <button onClick={this.toggleArticle} />
        <form onSubmit={this.handleSubmit}>
          <textarea
            onChange={e => this.handleChange("body", e.target.value)}
            value={body}
          />
          <button>Create my article</button>
        </form>
      </div>
    );
  }

  handleChange = event => {
    const { key, value } = event.target;
    this.setState({ [key]: value });
  };
  toggleArticle = () => {
    const { showAddedArticle } = this.state;
    this.setState({ showAddedArticle: !showAddedArticle });
  };

  handleSubmit = e => {
    e.preventDefault();
    submitArticle(this.state).then(article => {
      navigate(`/articles/${article.article_id}`, { state: { new: true } });
    });
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
