import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import { sortedArticles } from "../api";
import "../App.css";

class DropdownPage extends Component {
  state = {
    sort_by: "created_at",
    order: "DESC"
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label> Sort by </label>
          <select
            id="sort_by"
            className="chosenSort"
            onChange={this.handleSortBy}
            defaultValue="created_at"
          >
            <option value="created_at" defaultValue>
              Date added
            </option>
            <option value="votes"> Votes</option>
            <option value="comment_count"> Comments</option>
            <option value="author"> Author</option>
          </select>
        </div>
        <div>
          <label className="orderText"> Order: </label>
          <select
            id="order"
            className="ordersort"
            onChange={this.handleOrder}
            defaultValue="DESC"
          >
            <option value="ASC">ascending</option>
            <option value="DESC">descending</option>
          </select>
          <button type="submit" className="SubmitButton">
            Sort
          </button>
        </div>
      </form>
    );
  }
  componentDidUpdate = (prevProps, prevState) => {
    const { sort_by, order } = this.state;
    const { sortTheArticles } = this.props;
    sortedArticles(sort_by, order).then(articles => {
      sortTheArticles(articles);
    });
  };

  handleSortBy = e => {
    this.setState({ sort_by: e.target.value });
  };
  handleOrder = e => {
    this.setState({ order: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.props);
    const { sort_by, order } = this.state;
    const { sortTheArticles } = this.props;
    sortedArticles(sort_by, order).then(articles => {
      sortTheArticles(articles);
    });
  };
}

export default DropdownPage;
