import * as React from 'react';
import { Container, Row, Form, FormGroup, Input, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import Infinite = require('react-infinite');

export interface IServicesPanelProps {
  roles: string[];
}

interface IServicesPanelState {
  dropdownOpen: boolean;
}

export default class ServicesPanel extends React.Component<IServicesPanelProps, IServicesPanelState>{
  state = {
    dropdownOpen: false
  }

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  getRolesDropdown = () => {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          All
        </DropdownToggle>
        <DropdownMenu>
          {this.props.roles.map(role => {
            return <DropdownItem>{role}</DropdownItem>
          })}
        </DropdownMenu>
      </Dropdown>
    );
  }

  render(){
    let rolesDropdown = this.getRolesDropdown();

    return (
      <Container>
        <Row>
          <Form>
            <FormGroup>
              <Input type="test" placeholder="Search"/>
            </FormGroup>
          </Form>
          {rolesDropdown}
        </Row>
        <Row>

        </Row>
      </Container>
    );
  }
}