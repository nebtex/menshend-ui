import * as React from 'react';
import { IService, IUser } from '../../../models/interface';
import { Container, Row, Form, FormGroup, Input, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import ServicesList from './ServicesList/ServicesList';
import Fuse = require('fuse.js');
let styles = require('./ServicesPanel.scss');

export interface IServicesPanelProps {
  roles: string[];
  services: IService[];
  user: IUser;
}

interface IServicesPanelState {
  dropdownOpen: boolean;
  searchValue: string;
  activeRole: string;
}

export default class ServicesPanel extends React.Component<IServicesPanelProps, IServicesPanelState>{
  state = {
    dropdownOpen: false,
    searchValue: '',
    activeRole: 'All'
  }

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  selectRole = (role:string) => {
    let filteredServices = this.props.services.filter((service) => {
      return service.roles.indexOf(role) > -1;
    });

    console.log(filteredServices);

    this.setState({
      activeRole: role
    });
  }

  getRolesDropdown = () => {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          {this.state.activeRole}
        </DropdownToggle>
        <DropdownMenu>
          {this.props.roles.map((role, index) => {
            return <DropdownItem key={index} onClick={() => {this.selectRole(role)}}>{role}</DropdownItem>
          })}
        </DropdownMenu>
      </Dropdown>
    );
  }

  searchOnChange = (evt:any) => {
    this.setState({
      searchValue: evt.target.value
    });
  }

  search = (evt:any) => {
    evt.preventDefault();

    var options = {
      keys: ['name']
    };

    var f = new Fuse<IService>(this.props.services, options);;
    var result = f.search(this.state.searchValue);
    console.log(result);
  }

  render(){
    let rolesDropdown = this.getRolesDropdown();
    return (
      <Container>
        <Row>
          <Form onSubmit={this.search}>
            <FormGroup>
              <Input type="test" placeholder="Search" onChange={this.searchOnChange}/>
            </FormGroup>
          </Form>
          {rolesDropdown}
        </Row>
        <Row>
          <ServicesList services={this.props.services} user={this.props.user}/>
        </Row>
      </Container>
    );
  }
}