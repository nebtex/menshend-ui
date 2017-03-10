import * as React from 'react';
import { Row, Label, Input, FormGroup, Tooltip, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import MonacoEditor from 'react-monaco-editor';
let styles = require('./BackendSection.scss');

interface IBackendSectionProps {
  codeOnChange?: any;
  strategy?: number;
  strategyOnChange?: any;
  csrf?: boolean;
  csrfOnChange?: any;
  impersonateWithinRole?: boolean;
  impersonateWithinRoleOnChange?: any;
  isActive?: boolean;
  isActiveOnChange?: any;
  strategies?: any;
}

interface IBackendSectionState {
  impersonateTooltipOpen: boolean;
  proxyTooltipOpen: boolean;
  strategiesDropdownOpen: boolean;
}

export default class BackendSection extends React.Component<IBackendSectionProps, {}>{
  static defaultProps = {
    proxyCode: '__=== Your code here ===',
    strategy: 0,
    csrf: true,
    impersonateWithinRole: true,
    isActive: true,
    strategies: {'Proxy': 0}
  }

  state = {
    impersonateTooltipOpen: false,
    proxyTooltipOpen: false ,
    activeStrategy: 'Proxy',
    strategiesDropdownOpen: false
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

  getActiveStrategyName = () => {
    let name:string;
    Object.keys(this.props.strategies).forEach((key:string) => {
      if(this.props.strategies[key] === this.props.strategy){
        name = key;
        return false;
      }
    });
    return name;
  }

  getStrategyCode = (value: string) => {
    return this.props.strategies[value];
  }

  render() {
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
              <Input 
                type="checkbox"
                onChange={this.props.csrfOnChange}
                checked={this.props.csrf}/>
                {' '} csrf
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input 
                type="checkbox"
                onChange={this.props.impersonateWithinRoleOnChange}
                checked={this.props.impersonateWithinRole}/>
                {' '} impersonateWithinRole
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input 
                type="checkbox"
                onChange={this.props.isActiveOnChange}
                checked={this.props.isActive}/>
                {' '} isActive
            </Label>
          </FormGroup>
          <FormGroup>
            <Dropdown isOpen={this.state.strategiesDropdownOpen} toggle={this.toggleStrategiesDropdown}>
              <DropdownToggle caret>
                { this.getActiveStrategyName() }
              </DropdownToggle>
              <DropdownMenu>
                {Object.keys(this.props.strategies).map((key:string, index:number) => {
                  return <DropdownItem key={index} onClick={() => { this.props.strategyOnChange(this.getStrategyCode(key))}}>{key}</DropdownItem>
                })}
              </DropdownMenu>
            </Dropdown>
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
}