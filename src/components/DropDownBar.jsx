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

import "../App.css";

const DropdownPage = () => {
  return (
    <ButtonToolbar className="sortBy">
      <Dropdown as={ButtonGroup}>
        <Button variant="info" size="sm">
          SORT BY
        </Button>
        <Dropdown.Toggle variant="info" id="dropBox" size="sm" />
        <Dropdown.Menu>
          <Dropdown.Item>Comment count</Dropdown.Item>
          <Dropdown.Item>Date</Dropdown.Item>
          <Dropdown.Item>Votes</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </ButtonToolbar>
  );
};

export default DropdownPage;
