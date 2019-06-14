import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import { getUser, getTopics } from "../api";
import "../App.css";

class DropdownPage extends Component {
  state = {
    topics: [],
    users: []
  };

  componentDidMount() {
    getTopics().then(topics => {
      this.setState({ topics: topics });
    });
    getUser().then(users => {
      this.setState({ users: users });
    });
  }
  render() {
    return (
      <div>
        <div>
          <label name="topicLabel"> Topic :</label>
          <select onChange={this.props.handleTopic}>
            {" "}
            <option value="-1">All topics</option>
            {this.state.topics.map((topic, index) => {
              return (
                <option value={topic.slug} key={index}>
                  {topic.slug}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <label> Sort order </label>
          <select
            id="order"
            className="chosenSort"
            onChange={this.props.handleOrder}
            defaultValue="created_at"
          >
            <option value="asc" defaultValue>
              ascending
            </option>
            <option value="desc">descending</option>
          </select>
          {/* <option value="votes"> Votes</option>
          <option value="comment_count"> Comments</option>
          <option value="author"> Author</option> */}
        </div>

        <div>
          <label className="orderText"> Sort by: </label>
          <select
            id="order"
            className="ordersort"
            onChange={this.props.handleSortBy}
          >
            <option value="author">author</option>
            <option value="topic">topic</option>
            <option value="title">title</option>
            <option value="votes">votes</option>
          </select>
          <button type="submit" className="SubmitButton">
            Sort
          </button>
        </div>
      </div>
    );
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.props);
    const { sortTheArticles, sortBy, order } = this.props.then(articles => {
      sortTheArticles(articles);
    });
  };
}
export default DropdownPage;
