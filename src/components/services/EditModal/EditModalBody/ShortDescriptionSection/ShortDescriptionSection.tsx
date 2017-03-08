import * as React from 'react';
import { Form, FormGroup, TabPane, Input } from 'reactstrap';
let styles = require('./ShortDescriptionSection.scss');

const SHORT_DESCRIPTION_LENGTH = 100;

interface IShortDescriptionSectionProps {
  shortDescription: string;
  shortDescriptionOnChange: any;
}

export default class ShortDescriptionSection extends React.Component<IShortDescriptionSectionProps, {}>{
  render() {
    return (
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
    );
  }
}