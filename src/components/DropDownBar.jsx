import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import {ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem} from "react-dropDownBar"



class DropDownBar extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this)
    this.state = {
      dropdownOpen: false
    }
  }
toggle() {
  this.setState({
    dropdownOpen: !this.state.dropdownOpen
  })
}
render() {
  return (
    <ButtonDropdown isOpen={this.state.dropdownopen} toggle={this.toggle} >
    <DropdownToggle caret> Button Dropdown </DropdownToggle>
    <DropdownMenu>
      <DropdownItem header>Header</DropdownItem>
        </DropdownMenu>
        </ButtonDropdown>
  )
}
}


export default DropDownBar;


