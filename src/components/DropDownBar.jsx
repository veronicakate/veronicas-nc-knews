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
      <ButtonToolbar
        className="sortBy"
        onChange={this.handleSortBy}
        defaultValue="created_at"
      >
        <Dropdown as={ButtonGroup}>
          <Button variant="info" size="sm">
            SORT BY
          </Button>
          <Dropdown.Toggle variant="info" id="dropBox" size="sm" />
          <Dropdown.Menu>
            <Dropdown.Item value>Comment count</Dropdown.Item>
            <Dropdown.Item value="created_at">Date</Dropdown.Item>
            <Dropdown.Item value="votes">Votes</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </ButtonToolbar>
    );
  }

  handleSortBy = e => {
    this.state({ sort_by: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { sort_by } = this.state;
    // const { sortingArticles } = this.props;
    // sortedArticles(sort_by).then(articles => {
    //   sortTheArticles(articles);
  };
}
export default DropdownPage;
