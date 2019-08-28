import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">ReadingList</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/signin/">Sign In</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/signup/">Sign Up</NavLink>
              </NavItem>


              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>IkeyBenz</DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem><NavLink class="text-dark" href="/friends/">Friends</NavLink></DropdownItem>
                  <DropdownItem>My Reading List</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Sign Out</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}


export default Header;