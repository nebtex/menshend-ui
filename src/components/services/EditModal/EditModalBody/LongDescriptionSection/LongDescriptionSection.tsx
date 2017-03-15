import * as React from 'react';
import { TabPane, FormGroup, FormFeedback, Label, Input } from 'reactstrap';
let styles = require('./LongDescriptionSection.scss');

export interface ILongDescriptionSectionProps {
  longDescriptionUrlActive?:boolean;
  longDescriptionUrlActiveOnChange: any;
  longDescription?: string;
  longDescriptionOnChange: any;
  longDescriptionUrlOnChange: any;
  longDescriptionUrl?: string;
  longDescriptionUrlError?: boolean;
}

export default class LongDescriptionSection extends React.Component<ILongDescriptionSectionProps, {}> {
  
  static defaultProps = {
    longDescription: '',
    longDescriptionUrl: '',
    longDescriptionUrlActive: false
  }

  getLongDescriptionUrlFormGroup = () => {
    const danger = this.props.longDescriptionUrlActive && this.props.longDescriptionUrlError;

    return (
      <FormGroup disabled={!this.props.longDescriptionUrlActive} color={danger ? "danger" : null} className="longDescriptionUrlFormGroup">
        <Input 
          value={this.props.longDescriptionUrl} 
          onChange={(e:any) => {this.props.longDescriptionUrlOnChange(e.target.value)}} 
          disabled={!this.props.longDescriptionUrlActive}
          state={danger ? 'danger': null}
          className="longDescriptionUrlInput"/>
          {danger ? <FormFeedback>Please enter a valid URL</FormFeedback> : null}
      </FormGroup>
    );
  }

  render(){
    const longDescriptionUrlFormGroup = this.getLongDescriptionUrlFormGroup();

    return (
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
            onChange={(e:any) => {this.props.longDescriptionOnChange(e.target.value)}}/>
        </FormGroup>
      </TabPane>
    );
  }
}