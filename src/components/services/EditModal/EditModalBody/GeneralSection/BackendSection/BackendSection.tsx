import * as React from 'react';
import { Row, Label, Input, FormGroup, Tooltip, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import MonacoEditor from 'react-monaco-editor';
import HelpButton from '../../../../../general/HelpButton/HelpButton';
let styles = require('./BackendSection.scss');

export interface IBackendSectionProps {
  codeOnChange?: any;
  strategy?: string;
  strategyOnChange?: any;
  codeLanguage?: string;
  codeLanguageOnChange?: any;
  csrf?: boolean;
  csrfOnChange?: any;
  impersonateWithinRole?: boolean;
  impersonateWithinRoleOnChange?: any;
  isActive?: boolean;
  isActiveOnChange?: any;
}

interface IBackendSectionState {
  impersonateTooltipOpen: boolean;
  proxyTooltipOpen: boolean;
  strategiesDropdownOpen: boolean;
  languagesDropdownOpen: boolean;
}

export default class BackendSection extends React.Component<IBackendSectionProps, {}>{
  strategies = ['proxy', 'port-forward', 'redirect']

  languages = ['lua', 'yml']

  static defaultProps = {
    proxyCode: '__=== Your code here ===',
    strategy: 'proxy',
    csrf: true,
    impersonateWithinRole: false,
    isActive: true,
    codeLanguage: 'lua'
  }

  state = {
    impersonateTooltipOpen: false,
    proxyTooltipOpen: false ,
    strategiesDropdownOpen: false,
    languagesDropdownOpen: false
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

  toggleStrategiesDropdown = () => {
    this.setState({
      strategiesDropdownOpen: !this.state.strategiesDropdownOpen
    });
  }

  toggleLanguagesDropdown = () => {
    this.setState({
      languagesDropdownOpen: !this.state.languagesDropdownOpen
    });
  }

  getEditorDefaultValue = () => {
    switch(this.props.codeLanguage){
      case 'lua':
        return '__==== your code here ====';
      case 'yml':
        return '#=== your code here ===='
    }
  }

  render() {
    const requireConfig = {
      url: 'https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.1/require.min.js',
      paths: {
        'vs': 'https://microsoft.github.io/monaco-editor/node_modules/monaco-editor/min/vs'
      }
    };

    console.log(this.props.strategyOnChange);
    
    return (
      <div>
        <h5>Backend rule</h5>
        <Row className={styles.rolesRow}>
          {this.props.strategy === 'proxy' ?
            <FormGroup check className={styles.rolesRowFormGroup}>
              <Label check>
                <Input 
                  type="checkbox"
                  onChange={this.props.csrfOnChange}
                  checked={this.props.csrf}/>
                  {' '} CSRF protection
              </Label>
              <HelpButton
                content='Some content about CSRF Protection value'
                linkLabel='View more'
                link='#'
              />
            </FormGroup>: null
          }
          <FormGroup check className={styles.rolesRowFormGroup}>
            <Label check>
              <Input 
                type="checkbox"
                onChange={this.props.impersonateWithinRoleOnChange}
                checked={this.props.impersonateWithinRole}/>
                {' '} Impersonate within role
            </Label>
            <HelpButton
              content='Some content about impersonate within role value'
              linkLabel='View more'
              link='#'
            />
          </FormGroup>
          <FormGroup check className={styles.rolesRowFormGroup}>
            <Label check>
              <Input 
                type="checkbox"
                onChange={this.props.isActiveOnChange}
                checked={this.props.isActive}/>
                {' '} Is active
            </Label>
            <HelpButton
              content='Some content about is Active value'
              linkLabel='View more'
              link='#'
            />
          </FormGroup>
          <FormGroup className={styles.rolesRowFormGroup}>
            <Label>Strategy</Label>
            <Dropdown isOpen={this.state.strategiesDropdownOpen} toggle={this.toggleStrategiesDropdown} className={styles.rowDropdown}>
              <DropdownToggle caret className={styles.capitalizeDropdownItem}>
                { this.props.strategy }
              </DropdownToggle>
              <DropdownMenu>
                {this.strategies.map((strategy:string, index:number) => {
                  return <DropdownItem key={index} onClick={() => { this.props.strategyOnChange(strategy)}} className={styles.capitalizeDropdownItem}>{strategy}</DropdownItem>
                })}
              </DropdownMenu>
            </Dropdown>
            <HelpButton
              content='Some content about strategy value'
              linkLabel='View more'
              link='#'
            />
          </FormGroup>
          <FormGroup className={styles.rolesRowFormGroup}>
            <Label>Language</Label>
            <Dropdown isOpen={this.state.languagesDropdownOpen} toggle={this.toggleLanguagesDropdown} className={styles.rowDropdown}>
              <DropdownToggle caret className={styles.capitalizeDropdownItem}>
                { this.props.codeLanguage }
              </DropdownToggle>
              <DropdownMenu>
                {this.languages.map((language:string, index:number) => {
                  return <DropdownItem key={index} onClick={() => { this.props.codeLanguageOnChange(language)}} className={styles.capitalizeDropdownItem}>{language}</DropdownItem>
                })}
              </DropdownMenu>
            </Dropdown>
            <HelpButton
              content='Some content about code language value'
              linkLabel='View more'
              link='#'
            />
          </FormGroup>
        </Row>
        <MonacoEditor 
          height={300}
          language={this.props.codeLanguage}
          requireConfig={requireConfig}
          onChange={this.props.codeOnChange}
          defaultValue={this.getEditorDefaultValue()}
          options={{
            theme:'vs-dark'
          }}/>
      </div>
    );
  }
}