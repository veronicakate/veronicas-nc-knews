import React, { Component } from "react";
import { postComment } from "../api";
import { forInStatement } from "@babel/types";
import { Form, Container, Card } from "react-bootstrap";

class CommentForm extends Component {
  state = {
    body: ""
  };
  handleChange = e => {
    this.setState({ body: e.target.value });
  };
  postComment = event => {
    event.preventDefault();
    postComment(this.props.article_id, {
      username: this.props.loggedInUser,
      body: this.state.body
    }).then(comment => {
      this.props.showComment(comment);
      this.setState({ body: "" });
      this.refs.form.reset();
    });
  };
  render() {
    const button = !!this.state.body;
    return (
      <Container>
        <Card>
          <Form ref="form" onSubmit={this.resetForm}>
            <Form.Group>
              <forInStatement.control
                onChange={this.handleChange}
                as="textarea"
                rows="4"
                placeholder={"Please log in to post a comment if you wish."}
              >
                {" "}
              </forInStatement.control>
              <h6> Add comment here.. </h6>
              <button disabled={!button} type="submit">
                {" "}
                submit
              </button>
            </Form.Group>
          </Form>
        </Card>
      </Container>
    );
  }
}
//   {/* handleSubmit = e => {
//     e.preventDefault();
//     const { body } = this.state;
//     const { article_id, user, handleNewComment } = this.props;
//     addCommentByArticleId(body, article_id, user).then(comment =>
//       handleNewComment(comment)
//     );
//     this.setState({ body: "" });
//   };
// } */}

export default CommentForm;
