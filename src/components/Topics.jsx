// import React, { Component } from "react";
// import { getTopics, getArticles } from "../api";

// import TopicList from "./SelectedTopicsList";
// import Axios from "axios";
// import Navigation from "./navigation";
// class Topics extends Component {
//   state = {
//     topics: []
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
