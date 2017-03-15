import * as React from 'react';
import { Form, FormGroup, TabPane, Input } from 'reactstrap';
let styles = require('./ShortDescriptionSection.scss');

const SHORT_DESCRIPTION_LENGTH = 100;

export interface IShortDescriptionSectionProps {
  shortDescription?: string;
  shortDescriptionOnChange: any;
}

export default class ShortDescriptionSection extends React.Component<IShortDescriptionSectionProps, {}>{

  static defaultProps = {
    shortDescription: ''
  }

  render() {
    return (
      <TabPane tabId="shortDescription">
        <Form className={styles.shortDescriptionForm}>
          <FormGroup>
            <Input 
              type="textarea" 
              value={this.props.shortDescription} 
              maxLength={SHORT_DESCRIPTION_LENGTH} 
              onChange={(e:any) => {this.props.shortDescriptionOnChange(e.target.value)}}/>
              <p>{this.props.shortDescription.length}/{SHORT_DESCRIPTION_LENGTH} </p>
          </FormGroup>
        </Form>
      </TabPane>
    );
  }
}