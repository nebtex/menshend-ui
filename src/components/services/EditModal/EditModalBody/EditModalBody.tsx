import * as React from 'react';
import * as classnames from 'classnames';
import MonacoEditor from 'react-monaco-editor';
import { ModalBody, Nav, NavItem, NavLink, TabContent, TabPane, Form, FormGroup, 
         FormFeedback, Input, Label, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from 'reactstrap';

let styles = require('./EditModalBody.scss');
         
export interface IEditModalBodyProps {
  activeTab?: string;
  toggleTab: any;
  activeRole?: string;
  selectRole: any;
  subdomain?: string;
  subdomainOnChange: any;
  subdomainError?: boolean;
  name?: string;
  nameError?: boolean;
  nameOnChange: any;
  logo?: string;
  logoError?: boolean;
  logoOnError: any;
  logoOnChange: any;
  shortDescription?: string;
  shortDescriptionOnChange: any;
  longDescription?: string;
  longDescriptionOnChange: any;
  longDescriptionUrl?: string;
  longDescriptionUrlOnChange: any;
  longDescriptionUrlActive?: boolean;
  longDescriptionUrlActiveOnChange: any;
  dropdownOpen?: boolean;
  toggleDropdown: any;
  roles: string[];
  codeOnChange: any;
}

const DEFAULT_LOGO = 'https://placehold.it/64x64',
      SHORT_DESCRIPTION_LENGTH = 100;

export default class EditModalBody extends React.Component<IEditModalBodyProps,{}>{
  static defaultProps = {
    activeTab: 'general',
    activeRole: 'All',
    subdomain: '',
    subdomainError: false,
    name: 'Unknown service',
    nameError: false,
    logo: DEFAULT_LOGO,
    logoError: false,
    shortDescription: '',
    longDescription: '',
    longDescriptionUrl: '',
    longDescriptionUrlActive: false,
    dropdownOpen: false
  }

  getSubdomainFormGroup = () => {
    let subdomainError = this.props.subdomainError,
        subdomain = this.props.subdomain;

    return (
      <FormGroup color={subdomainError ? "danger" : null} className={styles.subdomainFormGroup}>
        <div>
          <Label>Subdomain</Label>
        </div>
        <div>
          <Input 
            id="subdomainInput" 
            onChange={this.props.subdomainOnChange} 
            value={subdomain} 
            state={subdomainError ? "danger" : null}/>
            {subdomainError ? <FormFeedback>This field is required</FormFeedback> : null}
        </div>
      </FormGroup>
    );
  }

  getNameFormGroup = () => {
    let name = this.props.name,
        nameError = this.props.nameError;

    return (
      <FormGroup color={nameError ? "danger" : null} className={styles.nameFormGroup}>
        <div>
          <Label>Name</Label>
        </div>
        <div>
          <Input
            value={this.props.name} 
            onChange={this.props.nameOnChange} 
            state={nameError ? "danger" : null} />
            {nameError ? <FormFeedback>This field is required</FormFeedback> : null}        
        </div>
      </FormGroup>
    )
  }

  getLogoFormGroup = () => {
    return (
      <div className={styles.logoSection}>
        <div>
          <Label>Logo</Label>
        </div>
        <div>
          <Input placeholder='url' value={this.props.logo} onChange={this.props.logoOnChange}></Input>
          <img src={this.props.logoError ? DEFAULT_LOGO : this.props.logo} height={64} width={64} className={styles.logo} onError={this.props.logoOnError}/>
        </div>
      </div>
    );
  }

  render() {
    const requireConfig = {
      url: 'https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.1/require.min.js',
      paths: {
        'vs': 'https://microsoft.github.io/monaco-editor/node_modules/monaco-editor/min/vs'
      }
    };

    let subdomainFormGroup = this.getSubdomainFormGroup(),
        nameFormGroup = this.getNameFormGroup(),
        logoFormGroup = this.getLogoFormGroup();

    return (
      <ModalBody>
        <div>
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: this.props.activeTab === 'general' })}
                onClick={() => { this.props.toggleTab('general'); }}
              >
                General
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.props.activeTab === 'shortDescription' })}
                onClick={() => { this.props.toggleTab('shortDescription'); }}
              >
                Short description
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.props.activeTab === 'longDescription' })}
                onClick={() => { this.props.toggleTab('longDescription'); }}
              >
                Long description
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.props.activeTab}>
            <TabPane tabId="general">
              <Form className={styles.generalForm}>
                { subdomainFormGroup }
                { nameFormGroup }
                { logoFormGroup }
              </Form>
            </TabPane>
            <TabPane tabId="shortDescription">
              <Form className={styles.shortDescriptionForm}>
                <FormGroup>
                  <Input 
                    type="textarea" 
                    value={this.props.shortDescription} 
                    maxLength={SHORT_DESCRIPTION_LENGTH} 
                    onChange={this.props.shortDescriptionOnChange} />
                    <p>{this.props.shortDescription.length}/{SHORT_DESCRIPTION_LENGTH} </p>
                </FormGroup>
              </Form>
            </TabPane>
            <TabPane tabId="longDescription" className={styles.longDescriptionPane}>
              <FormGroup check>
                <Label check>
                  <Input 
                    type="checkbox" 
                    checked={this.props.longDescriptionUrlActive} 
                    onChange={this.props.longDescriptionUrlActiveOnChange} 
                    className="longDescriptionUrlCheckbox"/>{' '}
                  URL
                </Label>
              </FormGroup>
              <FormGroup disabled={!this.props.longDescriptionUrlActive} >
                <Input 
                  value={this.props.longDescriptionUrl} 
                  onChange={this.props.longDescriptionUrlOnChange} 
                  disabled={!this.props.longDescriptionUrlActive} 
                  className="longDescriptionUrlInput"/>
              </FormGroup>
              <p className={styles.longDescriptionMessage}>Put the service long description here, You can use markdown in this field</p>
              <FormGroup disabled={this.props.longDescriptionUrlActive} 
                className={styles.longDescriptionTextAreaContainer}>
                <Input 
                  type="textarea" 
                  disabled={this.props.longDescriptionUrlActive} 
                  className={styles.longDescriptionTextArea} 
                  value={this.props.longDescription}
                  onChange={this.props.longDescriptionOnChange}/>
              </FormGroup>
            </TabPane>
          </TabContent>
        </div>
        <hr/>
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
          <Dropdown isOpen={this.props.dropdownOpen} toggle={this.props.toggleDropdown} className={styles.rolesDropdown}>
            <DropdownToggle caret>
              {this.props.activeRole}
            </DropdownToggle>
            <DropdownMenu className={styles.rolesContainer}>
              <DropdownItem onClick={() => { this.props.selectRole('All') }}>{'All'}</DropdownItem>
              <DropdownItem divider />
              {this.props.roles.map((role, index) => {
                return <DropdownItem key={index} onClick={() => { this.props.selectRole(role) }} className="role">{role}</DropdownItem>
              })}
            </DropdownMenu>
          </Dropdown>
        </Row>
        <FormGroup>
          <MonacoEditor 
            height={300}
            language='lua'
            requireConfig={requireConfig}
            onChange={this.props.codeOnChange}
            defaultValue="__=== type your code here ==="
            options={{
              theme:'vs-dark'
            }}/>
        </FormGroup>
      </ModalBody>
    );
  }
}