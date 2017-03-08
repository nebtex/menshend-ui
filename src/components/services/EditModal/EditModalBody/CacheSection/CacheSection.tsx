import * as React from 'react';
import { TabPane, Form, FormGroup, Label, Input } from 'reactstrap';
let styles = require('./CacheSection.scss');

interface ICacheSectionProps {
  cacheActive: boolean;
  cacheActiveOnChange: any;
  ttl: number;
  ttlOnChange: any;
}

export default class CacheSection extends React.Component<ICacheSectionProps, {}>{
  render() {
    return (
      <TabPane tabId="cache">
        <Form>
          <FormGroup>
            <Label check>
              <Input 
                type="checkbox"
                checked={this.props.cacheActive}
                onChange={this.props.cacheActiveOnChange}/>{' '}
              Active
            </Label>
          </FormGroup>
          <FormGroup>
            <Label for="TTL">TTL</Label>
            <Input 
              type="number"
              name="TTL"
              id="TTL"
              value={this.props.ttl}
              onChange={this.props.ttlOnChange}/>
          </FormGroup>
        </Form>
      </TabPane>
    );
  }
}