import React, { useState } from 'react';
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

function Header({ user, signout }) {
  const [isOpen, toggleOpen] = useState(false);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">ReadingList</NavbarBrand>
        <NavbarToggler onClick={() => toggleOpen(!isOpen)} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {user ? (
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>{user.name}</DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem><NavLink className="text-dark" href="/friends/">Friends</NavLink></DropdownItem>
                  <DropdownItem>My Reading List</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick={signout}>Sign Out</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            ) : (
                <div>
                  <NavItem>
                    <NavLink href="/signin/">Sign In</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/signup/">Sign Up</NavLink>
                  </NavItem>
                </div>
              )
            }

          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}


export default Header;