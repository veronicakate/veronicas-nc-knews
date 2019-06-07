import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from "mdbreact";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownToggle from "react-bootstrap/DropdownToggle";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import { sortedArticles } from "../api";
import "../App.css";

class DropdownPage extends Component {
  state = {
    sort_by: "created_at",
    order: "DESC",
    limit: "10"
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ButtonToolbar
          className="sortBy"
          onChange={this.handleSortBy}
          defaultValue="created_at"
        >
          <Dropdown as={ButtonGroup}>
            <Button variant="info" size="sm">
              SORT BY
            </Button>
            <Dropdown.Toggle
              variant="info"
              id="dropBox"
              size="sm"
              onChange={this.handleSortBy}
            />
            <Dropdown.Menu onChange={this.handleSortBy}>
              <Dropdown.Item value>Comment count</Dropdown.Item>
              <Dropdown.Item
                onChange={this.handleOrder}
                value="created_at"
                default="DESC"
              >
                Date
              </Dropdown.Item>
              <Dropdown.Item onChange={this.handleSortBy} value="votes">
                Votes
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </ButtonToolbar>
      </form>
    );
  }
  componentDidUpdate = () => {
    const { sort_by, limit, order } = this.state;
    const { sortTheArticles } = this.props;
    sortedArticles(sort_by, limit, order).then(articles => {
      sortTheArticles(articles);
    });
  };

  handleSortBy = e => {
    this.state.sort_by({ sort_by: e.target.value });
  };
  handleOrder = e => {
    this.state.order({ order: e.target.value });
  };
  handleLimit = e => {
    this.state.limit({ limit: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.props);
    const { sort_by, order, limit } = this.state;
    const { sortTheArticles } = this.props;
    sortedArticles(sort_by, order, limit)
      .then(articles => {
        sortTheArticles(articles);
      })
      .then(this.setState({}));
  };
}
export default DropdownPage;
