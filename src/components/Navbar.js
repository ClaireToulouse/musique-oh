import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  // NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
  import {NavLink} from 'react-router-dom';

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
          <NavbarBrand href="/">Musique-Oh
            <NavLink to="/Home"></NavLink>
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
                <NavLink to="/Categories">Categories  </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/AddAlbum">   Ajouter un album</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}