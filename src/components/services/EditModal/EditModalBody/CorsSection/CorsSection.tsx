import * as React from 'react';
import { TabPane, FormGroup, Label, Input } from 'reactstrap';
import EditableList from '../../../../general/EditableList/EditableList';
import { AdminServiceCors } from '../../../../../api/api';
let styles = require('./CorsSection.scss');

export interface ICorsSectionProps {
  cors?: AdminServiceCors;
  allowCredentialsOnChange: any;
  optionsPassthroughOnChange: any;
  maxAgeOnChange: any;
  handleAllowedOriginsAdd: any;
  handleAllowedOriginsDelete: any;
  handleAllowedMethodsAdd: any;
  handleAllowedMethodsDelete: any;
  handleAllowedHeadersAdd: any;
  handleAllowedHeadersDelete: any;
  handleExposedHeadersAdd: any;
  handleExposedHeadersDelete: any;
}

export default class CorsSection extends React.Component<ICorsSectionProps, {}>{
  static defaultProps = {
    cors: {
      allowedOrigins: new Array(),
      allowedMethods: new Array(),
      allowedHeaders: new Array(),
      exposedHeaders: new Array(),
      allowCredentials: false,
      optionsPassthrough: false,
      maxAge: false
    }
  }

  render() {
    return (
      <TabPane tabId="cors">
        <div className={styles.inlineCorsFields}>
          <FormGroup>
            <Label check>
              <Input 
                type="checkbox"
                checked={this.props.cors.allowCredentials}
                onChange={this.props.allowCredentialsOnChange} />
                {' '} allowCredentials
            </Label>
          </FormGroup>
          <FormGroup>
            <Label check>
              <Input 
                type="checkbox"
                checked={this.props.cors.optionsPassthrough}
                onChange={this.props.optionsPassthroughOnChange} />
                {' '} optionsPassthrough
            </Label>
          </FormGroup>
          <FormGroup>
            <Label check>
              <Input 
                type="checkbox"
                checked={this.props.cors.maxAge}
                onChange={this.props.maxAgeOnChange} />
                {' '} maxAge
            </Label>
          </FormGroup>
        </div>
        <FormGroup className={styles.editableListFormGroup}>
          <Label>Allowed Origins</Label>
          <EditableList 
            items={this.props.cors.allowedOrigins} 
            handleAdd={this.props.handleAllowedOriginsAdd} 
            handleDelete={this.props.handleAllowedOriginsDelete}
            placeholder="New allowed origin"/>
        </FormGroup>
        <FormGroup className={styles.editableListFormGroup}>
          <Label>Allowed Methods</Label>
          <EditableList 
            items={this.props.cors.allowedMethods} 
            handleAdd={this.props.handleAllowedMethodsAdd} 
            handleDelete={this.props.handleAllowedMethodsDelete}
            placeholder="New allowed method"/>
        </FormGroup>
        <FormGroup className={styles.editableListFormGroup}>
          <Label>Allowed Headers</Label>
          <EditableList 
            items={this.props.cors.allowedHeaders} 
            handleAdd={this.props.handleAllowedHeadersAdd} 
            handleDelete={this.props.handleAllowedHeadersDelete}
            placeholder="New allowed header"/>
        </FormGroup>
        <FormGroup className={styles.editableListFormGroup}>
          <Label>Exposed Headers</Label>
          <EditableList 
            items={this.props.cors.exposedHeaders} 
            handleAdd={this.props.handleExposedHeadersAdd} 
            handleDelete={this.props.handleExposedHeadersDelete}
            placeholder="New exposed header"/>
        </FormGroup>
      </TabPane>
    );
  }
}