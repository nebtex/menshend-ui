import * as React from 'react';
import { ISpace } from '../../../models/interface';
import { LoginStatus } from '../../../api/api';
import { SessionCounter } from './SessionCounter/SessionCounter';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button, Form } from 'reactstrap';

interface INavBarProps {
  environment: ISpace
  loginStatus: LoginStatus;
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
              <SessionCounter expiresAt={this.props.loginStatus.sessionExpiresAt} />
            </NavItem>
            <NavItem>
              <Form action="/ui/logout" method="get">
                <Button color="danger" >Logout</Button>
              </Form>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}