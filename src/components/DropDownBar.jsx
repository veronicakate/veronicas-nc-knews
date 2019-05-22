import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownToggle from "react-bootstrap/DropdownToggle";
import ButtonToolbar from "react-bootstrap/ButtonToolbar"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import Button from "react-bootstrap/Button"

import "../App.css"





const DropdownPage = () => {
  return (
    <ButtonToolbar>
    <Dropdown as={ButtonGroup} >
    
    <Button variant="light" size="sm"  >Sort by</Button>
  <Dropdown.Toggle  variant="info" id="dropBox" size="sm"  >
   
  </Dropdown.Toggle>

<Dropdown.Menu >
  <Dropdown.Item >Created at</Dropdown.Item>
  <Dropdown.Item >Date</Dropdown.Item>
  <Dropdown.Item >Topic</Dropdown.Item>
</Dropdown.Menu>

</Dropdown>

</ButtonToolbar>
    )
       }
       




export default DropdownPage;


