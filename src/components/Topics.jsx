import React, { Component } from "react";
import { getTopics } from "../api";

import TopicList from "./SelectedTopicsList";
class Topics extends Component {
  state = {
    comments: []
  };

  componentDidMount() {
    getTopics(this.props.topic)
      .then(topics => {
        this.setState({ topics });
      })
      .catch(({ response: { data, status } }) => {
        console.log(data.message, status);
      });
  }
  render() {
    return <TopicList topics={this.state.topics} />;
  }
}

export default Topics;
