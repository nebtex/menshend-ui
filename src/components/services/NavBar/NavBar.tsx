import * as React from 'react';
import { ISpace } from '../../../models/interface';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

interface INavBarProps {
  environment: ISpace
}

export default class NavBar extends React.Component<INavBarProps, {}>{
  state = {
    isOpen: false,
    dropdownOpen: false
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  toggleDropdown = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render(){
    return (
      <Navbar color="faded" light toggleable>
        <NavbarToggler right onClick={this.toggle} />
        <NavbarBrand href="#">{this.props.environment.name}</NavbarBrand>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="#">Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Audit Log</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Services</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}