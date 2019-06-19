import React, { Component } from "react";
import { getUser, getTopics, sortedArticles } from "../api";
import "../App.css";

class DropdownPage extends Component {
  state = {
    topics: [],
    users: [],
    sort_by: "created_at",
    order: "DESC",
    limit: 10
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label name="topicLabel"> Sort By :</label>
            <select onChange={this.handleSortBy} defaultValue="created_at">
              {" "}
              <option value="created_at" defaultValue>
                Date created
              </option>
              <option value="votes" defaultValue>
                Votes
              </option>
              <option value="title" defaultValue>
                Title
              </option>
              <option value="author" defaultValue>
                Author
              </option>
            </select>
          </div>
          <div>
            <label> Order:</label>
            <select id="order" onChange={this.handleOrder} defaultValue="DESC">
              <option value="ASC"> Ascending</option>
              <option value="DESC"> Descending</option>
            </select>
          </div>
          <div>
            <label>Results:</label>
            <select id="limit" onChange={this.handleLimit}>
              <option value="5"> 5</option>
              <option value="10"> 10</option>
            </select>
          </div>
          <button type="submit" className="submit">
            Sort
          </button>
        </form>
      </div>
    );
  }

  componentDidUpdate = (prevProps, prevState) => {
    const { sort_by, order, limit } = this.state;
    const { sortTheArticles } = this.props;
    sortedArticles(sort_by, order, limit).then(articles => {
      sortTheArticles(articles);
    });
  };

  handleOrder = e => {
    this.setState({ order: e.target.value });
  };
  handleLimit = e => {
    this.setState({ limit: e.target.value });
  };
  handleSortBy = e => {
    this.setState({ sort_by: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { sort_by, limit, order } = this.state;
    const { sortTheArticles } = this.props;
    sortedArticles(sort_by, order, limit)
      .then(articles => {
        sortTheArticles(articles);
      })
      .then(this.setState);
  };
}
export default DropdownPage;
