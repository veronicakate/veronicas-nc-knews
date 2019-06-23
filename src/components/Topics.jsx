import React, { Component } from "react";
import { getTopics } from "../api";
import TopicList from "./SelectedTopicsList";
import { Router, Link } from "@reach/router";

const Topics = ({ topics }) => {
  return (
    <div className="header">
      {topics.map(topic => (
        <div key={topic.slug}>
          {" "}
          <Link to={`/topics`}>view all topics</Link>
          <Link to={`/topics/${topic.slug}`} className="link">
            <h1>{topic.slug} </h1>
          </Link>
          <div align="right">
            <h5 className="topic">Topic: {topic.slug}</h5>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Topics;

// class Topics extends Component {
//   state = {
//     topics: ""
//   };

//   componentDidMount() {
//     getTopics(this.props.topics)
//       .then(topics => {
//         this.setState({ topics });
//       })
//       .catch(({ response: { data, status } }) => {
//         console.log(data.message, status);
//       });
//   }
//   render() {
//     return (
//       <div>
//         <TopicList topics={this.state.topics} path="/articles/topics" />{" "}
//       </div>
//     );
//   }
// }
// export default Topics;
