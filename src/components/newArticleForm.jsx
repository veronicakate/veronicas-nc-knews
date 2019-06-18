import React, { Component } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Router, Link } from "@reach/router";

const NewArticleForm = props => {
  const articleButton = !!props.title && !!props.body && !!props.topic;
  const { state: locationState } = this.props.location;
  return (
    <Container>
      {this.props.location.state && this.props.location.state.newArticle && (
        <h2>hello, you posted an article</h2>
      )}
      <h2 className="titleSingleArticle">{this.props.article.title}</h2>
      <p className="body"> {this.props.article.body} </p>
      <p> Votes:{this.props.article.votes}</p>
      <p className="topicSingle">
        {" "}
        Topic: <Link to={"/articles/topics"}>
          {" "}
          {this.props.article.topic}
        </Link>{" "}
      </p>
      <p className="author">Author: {this.props.article.author}</p>
      <p className="comment_count">
        Comment count: {this.props.article.comment_count}
      </p>
      <h4> Post new article</h4>
      <Form onSubmit={props.addNewArticle}>
        <Form.Group>
          <Form.Label> Topic</Form.Label>
          <Form.Text>
            Select from list below or add{" "}
            <Link to="/topic"> new topic here</Link>
          </Form.Text>
          <Form.Control
            onChange={event => {
              this.props.updateUserInput("topic", event);
            }}
            as="select"
          >
            <option> select topic</option>
            {props.topic.map(topic => {
              return (
                <option key={`topicSelect${topic.slug}`}>{topic.slug}</option>
              );
            })}
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label> Title </Form.Label>
          <Form.Control
            onChange={event => {
              this.props.updateUserInput("title", event);
            }}
            as="textarea"
            rows="3"
          />
        </Form.Group>
        <Button type="submit" disable={!articleButton} />
      </Form>
    </Container>
  );
};

export default NewArticleForm;
