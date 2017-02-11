import * as React from 'react';
import * as classnames from 'classnames';
import { Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Nav, NavItem, NavLink, Button, Card, CardTitle, CardText, TabContent, TabPane, Row, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
let styles = require('./EditModal.scss');

export interface IEditModalProps {
  isOpen: boolean;
  toggle: any;
  roles: string[];
}

interface IEditModalState {
  dropdownOpen: boolean;
  activeTab: string;
  activeRole: string;
}

export default class EditModal extends React.Component<IEditModalProps, IEditModalState>{
  state = {
    activeTab: 'shortDescription',
    activeRole: 'All',
    dropdownOpen: false
  }

  toggleTab = (tab:string) => {
    this.setState({
      activeTab: tab
    });
  }

  selectRole = (role:string) => {
    this.setState({
      activeRole: role
    });
  }

  toggleDropdown = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render(){
    return (
      <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className={styles.modal}>
        <ModalHeader toggle={this.props.toggle}>Edit service</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label>Subdomain</Label>
              <Input placeholder='Company SubDomain'></Input>
            </FormGroup>
            <FormGroup>
              <Label>Name</Label>
              <Input placeholder='Company Name'></Input>
            </FormGroup>
            <FormGroup>
              <Label>Logo</Label>
              <Input placeholder='url'></Input>
            </FormGroup>
          </Form>
          <div>
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === 'shortDescription' })}
                  onClick={() => { this.toggleTab('shortDescription'); }}
                >
                  Short description
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === 'longDescription' })}
                  onClick={() => { this.toggleTab('longDescription'); }}
                >
                  Long description
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="shortDescription">
                <Form>
                  <FormGroup>
                    <Input type="textarea"></Input>
                  </FormGroup>
                </Form>
              </TabPane>
              <TabPane tabId="longDescription">
                <Form>
                  <FormGroup>
                    <Input type="textarea"></Input>
                  </FormGroup>
                </Form>
              </TabPane>
            </TabContent>
          </div>
          <h3>Backend rule</h3>
          <Row>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" />{' '}
                All the roles
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" />{' '}
                Per role
              </Label>
            </FormGroup>
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown} className={styles.rolesDropdown}>
              <DropdownToggle caret>
                {this.state.activeRole}
              </DropdownToggle>
              <DropdownMenu className={styles.rolesContainer}>
                <DropdownItem onClick={() => { this.selectRole('All') }}>{'All'}</DropdownItem>
                <DropdownItem divider />
                {this.props.roles.map((role, index) => {
                  return <DropdownItem key={index} onClick={() => { this.selectRole(role) }} className="role">{role}</DropdownItem>
                })}
              </DropdownMenu>
            </Dropdown>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
          <Button color="primary" onClick={this.props.toggle}>Save</Button>{' '}
        </ModalFooter>
      </Modal>
    );
  }
}