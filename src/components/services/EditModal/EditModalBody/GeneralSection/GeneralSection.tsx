import * as React from 'react';
import { TabPane, Form, FormFeedback, FormGroup, Label, Input } from 'reactstrap';
import BackendSection from './BackendSection/BackendSection';
let styles = require('./GeneralSection.scss');

const DEFAULT_LOGO = 'https://placehold.it/64x64';

export interface IGeneralSectionProps {
  name?: string;
  nameError?: boolean;
  nameOnChange: any;
  subdomain?: string;
  subdomainOnChange?: any;
  subdomainError?: boolean;
  logo?: string;
  logoOnChange: any;
  logoError?: boolean;
  logoOnError: any;
  codeOnChange: any;
  strategy?: number;
  strategyOnChange: any;
  csrf?: boolean;
  csrfOnChange: any;
  impersonateWithinRole?: boolean;
  impersonateWithinRoleOnChange: any;
  isActive?: boolean;
  isActiveOnChange: any;
  strategies?: any;
}

export default class GeneralSection extends React.Component<IGeneralSectionProps, {}>{
  static defaultProps = {
    name: 'Unknown service',
    nameError: false,
    logo: DEFAULT_LOGO,
    logoError: false,
    subdomainError: false,
    subdomain: ''
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
          <Input placeholder='url' value={this.props.logo} onChange={this.props.logoOnChange} />
          <img 
            src={this.props.logoError ? DEFAULT_LOGO : this.props.logo} 
            height={64} 
            width={64} 
            className={styles.logo} 
            onError={() => {this.props.logoOnError(true)}}
            onLoad={() => {this.props.logoOnError(false)}} />
        </div>
      </div>
    );
  }

  getSubdomainFormGroup = () => {
    const { subdomain, subdomainError } = this.props;

    return (
      <FormGroup color={subdomainError ? "danger" : null} className={styles.subdomainFormGroup}>
        <div>
          <Label>Subdomain</Label>
        </div>
        <div>
          <Input
            value={subdomain} 
            onChange={this.props.subdomainOnChange} 
            state={subdomainError ? "danger" : null} />
            {subdomainError ? <FormFeedback>This field is required</FormFeedback> : null}        
        </div>
      </FormGroup>
    );
  }

  render() {
    const nameFormGroup = this.getNameFormGroup(),
          subdomainFormGroup = this.getSubdomainFormGroup(),
          logoFormGroup = this.getLogoFormGroup();

    return (
      <TabPane tabId="general">
        { nameFormGroup }
        { subdomainFormGroup }
        { logoFormGroup }
        <hr/>
        <BackendSection
          codeOnChange={this.props.codeOnChange} 
          strategy={this.props.strategy}
          strategyOnChange={this.props.strategyOnChange}
          csrf={this.props.csrf}
          csrfOnChange={this.props.csrfOnChange}
          impersonateWithinRole={this.props.impersonateWithinRole}
          impersonateWithinRoleOnChange={this.props.impersonateWithinRoleOnChange}
          isActive={this.props.isActive}
          isActiveOnChange={this.props.isActiveOnChange} 
          strategies={this.props.strategies} />
      </TabPane>
    );
  }
}