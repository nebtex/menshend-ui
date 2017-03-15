import * as React from 'react';
import { TabPane, FormGroup, Label, Input } from 'reactstrap';
import EditableList from '../../../../general/EditableList/EditableList';
import { AdminServiceCors } from '../../../../../api/api';
import HelpButton from '../../../../general/HelpButton/HelpButton';
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
  helpContents = {
    allowedOrigins: '<div style="text-align:justify">AllowedOrigins is a list of origins a cross-domain request can be executed from. An origin may contain a wildcard (*) to replace 0 or more characters (i.e.: http://*.domain.com). Usage of wildcards implies a small performance penality. Only one wildcard can be used per origin. Default value is ["*"]</div>',
    allowedMethods: '<div style="text-align:justify">AllowedMethods is a list of methods the client is allowed to use with cross-domain requests. Default value is simple methods (GET and POST)</div>',
    allowedHeaders: '<div style="text-align:justify">AllowedHeaders is list of non simple headers the client is allowed to use with cross-domain requests. If the special "*" value is present in the list, all headers will be allowed. Default value is [] but "Origin" is always appended to the list.</div>',
    exposedHeaders: '<div style="text-align:justify">ExposedHeaders indicates which headers are safe to expose to the API of a CORS API specification</div>',
    optionsPassThrough: '<div style="text-align:justify">OptionsPassthrough instructs preflight to let other potential next handlers to process the OPTIONS method. Turn this on if your application handles OPTIONS.</div>',
    maxAge: '<div style="text-align:justify"> MaxAge indicates how long (in seconds) the results of a preflight request can be cached </div>',
    allowCredentials: '<div style="text-align:justify"> AllowCredentials indicates whether the request can include user credentials like cookies, HTTP authentication or client side SSL certificates.</div>'
  }

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
            <HelpButton
              className={styles.helpButton}
              content={this.helpContents.allowCredentials}
              placement='bottom' />
          </FormGroup>
          <FormGroup>
            <Label check>
              <Input 
                type="checkbox"
                checked={this.props.cors.optionsPassthrough}
                onChange={this.props.optionsPassthroughOnChange} />
                {' '} optionsPassthrough
            </Label>
            <HelpButton
              className={styles.helpButton}
              content={this.helpContents.optionsPassThrough} 
              placement='bottom' />
          </FormGroup>
          <FormGroup>
            <Label check>
              <Input 
                type="checkbox"
                checked={this.props.cors.maxAge}
                onChange={this.props.maxAgeOnChange} />
                {' '} maxAge
            </Label>
            <HelpButton
              className={styles.helpButton}
              content={this.helpContents.maxAge}
              placement='bottom' />
          </FormGroup>
        </div>
        <FormGroup className={styles.editableListFormGroup}>
          <Label>
            Allowed Origins
            <HelpButton
              className={styles.helpButton}
              content={this.helpContents.allowedOrigins} 
              placement='bottom'/>
          </Label>
          <EditableList 
            items={this.props.cors.allowedOrigins} 
            handleAdd={this.props.handleAllowedOriginsAdd} 
            handleDelete={this.props.handleAllowedOriginsDelete}
            placeholder="New allowed origin"/>
        </FormGroup>
        <FormGroup className={styles.editableListFormGroup}>
          <Label>
            Allowed Methods
            <HelpButton
              className={styles.helpButton}
              content={this.helpContents.allowedMethods} 
              placement='bottom'/>
          </Label>
          <EditableList 
            items={this.props.cors.allowedMethods} 
            handleAdd={this.props.handleAllowedMethodsAdd} 
            handleDelete={this.props.handleAllowedMethodsDelete}
            placeholder="New allowed method"/>
        </FormGroup>
        <FormGroup className={styles.editableListFormGroup}>
          <Label>
            Allowed Headers
            <HelpButton
              className={styles.helpButton}
              content={this.helpContents.allowedHeaders} 
              placement='bottom'/>
          </Label>
          <EditableList 
            items={this.props.cors.allowedHeaders} 
            handleAdd={this.props.handleAllowedHeadersAdd} 
            handleDelete={this.props.handleAllowedHeadersDelete}
            placeholder="New allowed header"/>
        </FormGroup>
        <FormGroup className={styles.editableListFormGroup}>
          <Label>
            Exposed Headers
            <HelpButton
              className={styles.helpButton}
              content={this.helpContents.exposedHeaders} 
              placement='bottom'/>
          </Label>
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