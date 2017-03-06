import * as React from 'react';
import * as classnames from 'classnames';
import MonacoEditor from 'react-monaco-editor';
import { ModalBody, Nav, NavItem, NavLink, TabContent, TabPane, Form, FormGroup, ListGroup, 
         ListGroupItem, FormFeedback, Input, Label, Dropdown, DropdownItem, DropdownMenu, 
         DropdownToggle, Row , Button, Tooltip} from 'reactstrap';

let styles = require('./EditModalBody.scss');
         
export interface IEditModalBodyProps {
  activeTab?: string;
  toggleTab: any;
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
  codeOnChange: any;
  longDescriptionUrlError:boolean;
}

const DEFAULT_LOGO = 'https://placehold.it/64x64',
      SHORT_DESCRIPTION_LENGTH = 100;

export default class EditModalBody extends React.Component<IEditModalBodyProps,{}>{
  static defaultProps = {
    activeTab: 'general',
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

  state = {
    impersonateTooltipOpen: false,
    proxyTooltipOpen: false 
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

  getLongDescriptionUrlFormGroup = () => {
    const danger = this.props.longDescriptionUrlActive && this.props.longDescriptionUrlError;

    return (
      <FormGroup disabled={!this.props.longDescriptionUrlActive} color={danger ? "danger" : null} className="longDescriptionUrlFormGroup">
        <Input 
          value={this.props.longDescriptionUrl} 
          onChange={this.props.longDescriptionUrlOnChange} 
          disabled={!this.props.longDescriptionUrlActive}
          state={danger ? 'danger': null}
          className="longDescriptionUrlInput"/>
          {danger ? <FormFeedback>Please enter a valid URL</FormFeedback> : null}
      </FormGroup>
    );
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

  getCodeEditorSection = () => {
    const requireConfig = {
      url: 'https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.1/require.min.js',
      paths: {
        'vs': 'https://microsoft.github.io/monaco-editor/node_modules/monaco-editor/min/vs'
      }
    };

    return (
      <div>
        <h5>Backend rule</h5>
        <Row className={styles.rolesRow}>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" />{' '}
              Active
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label id="proxyTooltip" check>
              <Input type="checkbox" />{' '}
              Proxy
            </Label>
            <Tooltip placement="top" isOpen={this.state.proxyTooltipOpen} target="proxyTooltip" toggle={this.toggleProxyTooltip}>
              If this property is not active the user will be redirected with a 302 HTTP code
            </Tooltip>                        
          </FormGroup>
        </Row>
        <MonacoEditor 
          height={300}
          language='lua'
          requireConfig={requireConfig}
          onChange={this.props.codeOnChange}
          defaultValue="__=== type your code here ==="
          options={{
            theme:'vs-dark'
          }}/>
      </div>
    );
  }

  toggleImpersonateTooltip = () => {
    this.setState({
      impersonateTooltipOpen: !this.state.impersonateTooltipOpen
    });
  }

  toggleProxyTooltip = () => {
    this.setState({
      proxyTooltipOpen: !this.state.proxyTooltipOpen
    });
  }

  render() {
    const nameFormGroup = this.getNameFormGroup(),
        logoFormGroup = this.getLogoFormGroup(),
        longDescriptionUrlFormGroup = this.getLongDescriptionUrlFormGroup();
    
    const codeEditorSection = this.getCodeEditorSection();

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
              {longDescriptionUrlFormGroup}
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
        {codeEditorSection}
      </ModalBody>
    );
  }
}