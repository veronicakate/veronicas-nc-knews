import React, { Component } from "react";
import { getTopics, getArticles } from "../api";

import TopicList from "./SelectedTopicsList";
import Axios from "axios";
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
    return <TopicList topics={this.state.topics} />;
  }
}

export default Topics;

//articlespage-
// getArticlesByUser = () =>{
//   const author = jessjelly;
//   getArticles({author, limit}).then( articles => {
//     this.setState({articles})
//   })
// }
// // render () {
//   const {articles} = this.state;
//   return (
//     <div>

//     </div>
//   )
// }

// export const getArticles = query => {
//   return Axios.get(`${url}/articles`, {
// params:
// }
//   }).then(({ data: {articles})) => {
//     reutrn articles
//   }
// }
