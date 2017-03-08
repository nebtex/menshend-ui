import * as React from 'react';
import { TabPane, FormGroup, Label, Input } from 'reactstrap';
import EditableList from '../../../../general/EditableList/EditableList';
let styles = require('./CorsSection.scss');

interface ICorsSectionProps {
  allowCredentials: boolean;
  allowCredentialsOnChange: any;
  optionsPassthrough: boolean;
  optionsPassthroughOnChange: any;
  maxAge: boolean;
  maxAgeOnChange: any;
  allowedOrigins: string[];
  handleAllowedOriginsAdd: any;
  handleAllowedOriginsDelete: any;
  allowedMethods: string[];
  handleAllowedMethodsAdd: any;
  handleAllowedMethodsDelete: any;
  allowedHeaders: string[];
  handleAllowedHeadersAdd: any;
  handleAllowedHeadersDelete: any;
  exposedHeaders: string[];
  handleExposedHeadersAdd: string[];
  handleExposedHeadersDelete: string[];
}

export default class CorsSection extends React.Component<ICorsSectionProps, {}>{
  render() {
    return (
      <TabPane tabId="cors">
        <div className={styles.inlineCorsFields}>
          <FormGroup>
            <Label check>
              <Input 
                type="checkbox"
                checked={this.props.allowCredentials}
                onChange={this.props.allowCredentialsOnChange} />
                {' '} allowCredentials
            </Label>
          </FormGroup>
          <FormGroup>
            <Label check>
              <Input 
                type="checkbox"
                checked={this.props.optionsPassthrough}
                onChange={this.props.optionsPassthroughOnChange} />
                {' '} optionsPassthrough
            </Label>
          </FormGroup>
          <FormGroup>
            <Label check>
              <Input 
                type="checkbox"
                checked={this.props.maxAge}
                onChange={this.props.maxAgeOnChange} />
                {' '} maxAge
            </Label>
          </FormGroup>
        </div>
        <FormGroup className={styles.editableListFormGroup}>
          <Label>Allowed Origins</Label>
          <EditableList 
            items={this.props.allowedOrigins} 
            handleAdd={this.props.handleAllowedOriginsAdd} 
            handleDelete={this.props.handleAllowedOriginsDelete}
            placeholder="New allowed origin"/>
        </FormGroup>
        <FormGroup className={styles.editableListFormGroup}>
          <Label>Allowed Methods</Label>
          <EditableList 
            items={this.props.allowedMethods} 
            handleAdd={this.props.handleAllowedMethodsAdd} 
            handleDelete={this.props.handleAllowedMethodsDelete}
            placeholder="New allowed method"/>
        </FormGroup>
        <FormGroup className={styles.editableListFormGroup}>
          <Label>Allowed Headers</Label>
          <EditableList 
            items={this.props.allowedHeaders} 
            handleAdd={this.props.handleAllowedHeadersAdd} 
            handleDelete={this.props.handleAllowedHeadersDelete}
            placeholder="New allowed header"/>
        </FormGroup>
        <FormGroup className={styles.editableListFormGroup}>
          <Label>Exposed Headers</Label>
          <EditableList 
            items={this.props.exposedHeaders} 
            handleAdd={this.props.handleExposedHeadersAdd} 
            handleDelete={this.props.handleExposedHeadersDelete}
            placeholder="New exposed header"/>
        </FormGroup>
      </TabPane>
    );
  }
}