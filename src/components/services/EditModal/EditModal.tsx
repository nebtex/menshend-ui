import * as React from 'react';
import * as classnames from 'classnames';
import CodeEditor from './CodeEditor/CodeEditor';
import { IService } from '../../../models/interface';
let styles = require('./EditModal.scss');
import { Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, 
         FormFeedback, Label, Input, Nav, NavItem, NavLink, Button, Card, CardBlock, CardTitle, 
         CardText, TabContent, TabPane, Row, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';


export interface IEditModalProps {
  isOpen: boolean;
  toggle: any;
  roles: string[];
  service?: IService;
}

interface IEditModalState {
  dropdownOpen: boolean;
  activeTab: string;
  activeRole: string;
  codeEditorValue: string;
  subdomain: string;
  subdomainError: boolean;
  name: string;
  nameError: boolean;
  logo: string;
  logoError: boolean;
  shortDescription: string;
  longDescriptionUrl: string;
  longDescriptionUrlActive: boolean;
  longDescription: string;
}

const DEFAULT_LOGO = 'https://placehold.it/64x64';

export default class EditModal extends React.Component<IEditModalProps, IEditModalState>{
  state = {
    activeTab: 'shortDescription',
    activeRole: 'All',
    codeEditorValue: '',
    dropdownOpen: false,
    subdomain: '',
    subdomainError: false,
    name: 'Unknown service',
    nameError: false,
    logo: DEFAULT_LOGO,
    logoError: false,
    shortDescription: '',
    longDescriptionUrl: '',
    longDescriptionUrlActive: false,
    longDescription: ''
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

  codeEditorOnChange = (value:string) => {
    this.setState({
      codeEditorValue: value
    });
  }

  subdomainOnChange = (e:any) => {
    // Only alphanumeric
    let value = e.target.value,
        regex = /^[a-z0-9]+$/i;

    if(regex.test(value) || value === ''){
      this.setState({
        subdomain: value
      });
    }
  }

  getSubdomainFormGroup = () => {
    let subdomainError = this.state.subdomainError,
        subdomain = this.state.subdomain;

    return (
      <FormGroup color={subdomainError ? "danger" : null}>
        <Label>Subdomain</Label>
        <Input onChange={this.subdomainOnChange} value={subdomain} state={subdomainError ? "danger" : null}/>
        {subdomainError ? <FormFeedback>This field is required</FormFeedback> : null}
      </FormGroup>
    );
  }

  nameOnChange = (e:any) => {
    this.setState({
      name: e.target.value
    });
  }

  getNameFormGroup = () => {
    let name = this.state.name,
        nameError = this.state.nameError;

    return (
      <FormGroup color={nameError ? "danger" : null}>
        <Label>Name</Label>
        <Input value={this.state.name} onChange={this.nameOnChange} state={nameError ? "danger" : null} />
        {nameError ? <FormFeedback>This field is required</FormFeedback> : null}        
      </FormGroup>
    )
  }

  logoOnChange = (e:any) => {
    this.setState({
      logo: e.target.value,
      logoError: false
    });
  }

  logoOnError = () => {
    this.setState({
      logoError: true
    });
  }

  getLogoFormGroup = () => {
    return (
      <FormGroup>
        <Label>Logo</Label>
        <Row className={styles.logoRow}>
          <img src={this.state.logoError ? DEFAULT_LOGO : this.state.logo} height={64} width={64} className={styles.logo} onError={this.logoOnError}/>
          <Input placeholder='url' value={this.state.logo} className={styles.logoInput} onChange={this.logoOnChange}></Input>
        </Row>
      </FormGroup>
    );
  }

  longDescriptionUrlOnChange = (e:any) => {
    this.setState({
      longDescriptionUrl: e.target.value
    });
  }

  longDescriptionUrlActiveOnChange = (e:any) => {
    this.setState({
      longDescriptionUrlActive: !this.state.longDescriptionUrlActive
    });
  }

  formHasNoErrors = () => {
    let nameError = this.state.name.trim() === '',
        subdomainError = this.state.subdomain.trim() === '';
    return !nameError && !subdomainError ;
  }

  shortDescriptionOnChange = (e:any) => {
    this.setState({
      shortDescription: e.target.value
    });
  }

  longDescriptionOnChange = (e:any) => {
    this.setState({
      longDescription: e.target.value
    });
  }

  saveService = () => {
    // @TODO: set the errors here
    if(this.formHasNoErrors()){
      console.log('There are no errors');
    }else{
      this.setState({
        nameError: this.state.name.trim() === '',
        subdomainError: this.state.subdomain.trim() === ''
      });
    }
  }

  render(){
    let subdomainFormGroup = this.getSubdomainFormGroup(),
        nameFormGroup = this.getNameFormGroup(),
        logoFormGroup = this.getLogoFormGroup();

    return (
      <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className={styles.modal}>
        <ModalHeader toggle={this.props.toggle}>{this.props.service ? 'Edit service' : 'New service'}</ModalHeader>
        <ModalBody>
          <Form>
            { subdomainFormGroup }
            { nameFormGroup }
            { logoFormGroup }
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
                <FormGroup>
                  <Input 
                    type="textarea" 
                    value={this.state.shortDescription} 
                    maxLength={100} 
                    onChange={this.shortDescriptionOnChange} />
                </FormGroup>
              </TabPane>
              <TabPane tabId="longDescription" className={styles.longDescriptionPane}>
                <FormGroup check>
                  <Label check>
                    <Input 
                      type="checkbox" 
                      checked={this.state.longDescriptionUrlActive} 
                      onChange={this.longDescriptionUrlActiveOnChange} />{' '}
                    URL
                  </Label>
                </FormGroup>
                <FormGroup disabled={!this.state.longDescriptionUrlActive} >
                  <Input 
                    value={this.state.longDescriptionUrl} 
                    onChange={this.longDescriptionUrlOnChange} 
                    disabled={!this.state.longDescriptionUrlActive} />
                </FormGroup>
                <p className={styles.longDescriptionMessage}>Put the service long description here, You can use markdown in this field</p>
                <FormGroup disabled={this.state.longDescriptionUrlActive} 
                  className={styles.longDescriptionTextAreaContainer}>
                  <Input 
                    type="textarea" 
                    disabled={this.state.longDescriptionUrlActive} 
                    className={styles.longDescriptionTextArea} 
                    value={this.state.longDescription}
                    onChange={this.longDescriptionOnChange}/>
                </FormGroup>
              </TabPane>
            </TabContent>
          </div>
          <h5>Backend rule</h5>
          <Row className={styles.rolesRow}>
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
          <FormGroup>
            <CodeEditor lang="lua" value="__====== Your code here =====" onChange={this.codeEditorOnChange}/>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
          <Button color="primary" onClick={this.saveService}>Save</Button>{' '}
        </ModalFooter>
      </Modal>
    );
  }
}