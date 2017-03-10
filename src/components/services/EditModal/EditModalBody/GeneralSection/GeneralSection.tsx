import * as React from 'react';
import { TabPane, Form, FormFeedback, FormGroup, Label, Input } from 'reactstrap';
let styles = require('./GeneralSection.scss');

const DEFAULT_LOGO = 'https://placehold.it/64x64';

interface IGeneralSectionProps {
  name?: string;
  nameError?: boolean;
  nameOnChange?: any;
  logo?: string;
  logoOnChange?: any;
  logoError?: boolean;
  logoOnError?: any;
}

export default class GeneralSection extends React.Component<IGeneralSectionProps, {}>{
  static defaultProps = {
    name: 'Unknown service',
    nameError: false,
    logo: DEFAULT_LOGO,
    logoError: false
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

  render() {
    const nameFormGroup = this.getNameFormGroup(),
          logoFormGroup = this.getLogoFormGroup();

    return (
      <TabPane tabId="general">
        <Form className={styles.generalForm}>
          { nameFormGroup }
          { logoFormGroup }
        </Form>
      </TabPane>
    );
  }
}