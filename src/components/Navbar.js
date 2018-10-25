import React from 'react';
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
  DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import "../App.css";

export default class Example extends React.Component {
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
        <Navbar color="light" light expand="md" style={{
        height: '150px'}}>
          <NavbarBrand to= "/"  tag={Link} className="brand">Musique-Oh
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Catégories
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Pop/Rock
                  </DropdownItem>
                  <DropdownItem>
                    Classique
                  </DropdownItem>
                  <DropdownItem>
                    Indé
                  </DropdownItem>
                  <DropdownItem>
                    Jazz
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink to="/settings" tag={Link}>Réglages</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/addnewalbum" tag={Link}>Ajouter un album</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}