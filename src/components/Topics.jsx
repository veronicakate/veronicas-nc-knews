import React, { Component } from "react";
import { getTopics, getArticles } from "../api";

import TopicList from "./SelectedTopicsList";
import Axios from "axios";
import Navigation from "./navigation";
class Topics extends Component {
  state = {
    topics: []
  };

  componentDidMount() {
    console.log(this.props);
    getTopics(this.props.topic)
      .then(topics => {
        this.setState({ topics });
      })
      .catch(({ response: { data, status } }) => {
        console.log(data.message, status);
      });
  }
  render() {
    return <TopicList path="/topics" topics={this.state.topics} />;
  }
}

export default Topics;
