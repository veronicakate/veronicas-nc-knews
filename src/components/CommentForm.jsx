import React, { Component } from "react";
import { postComment } from "../api";

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
      this.props.updateComments(comment);
    });
    this.setState({ body: "" });
    this.refs.form.reset();
  };
  render() {
    const button = !!this.state.body;
    return (
      <Container>
        <Card>
          <Form ref="form" onSubmit={this.resetForm}>
            <Form.Group>
              <Form.Control
                onChange={this.handleChange}
                as="textarea"
                rows="4"
                placeholder={"Please log in to post a comment if you wish."}
              />{" "}
            </Form.Group>
            <button disabled={!button} type="submit">
              {" "}
              submit
            </button>
          </Form>
        </Card>
      </Container>
    );
  }
}

export default CommentForm;
