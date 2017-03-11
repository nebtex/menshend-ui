import * as React from 'react';
import { TabPane, Form, FormGroup, Label, Input } from 'reactstrap';
import { AdminServiceCache } from '../../../../../api/api';
let styles = require('./CacheSection.scss');

export interface ICacheSectionProps {
  cache?: AdminServiceCache;
  cacheActiveOnChange?: any;
  ttlOnChange?: any;
}

export default class CacheSection extends React.Component<ICacheSectionProps, {}>{
  static defaultProps = {
    cache: {
      ttl: 120,
      active: true
    }
  }

  render() {
    return (
      <TabPane tabId="cache">
        <Form>
          <FormGroup>
            <Label check>
              <Input 
                type="checkbox"
                checked={this.props.cache.active}
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
              value={this.props.cache.ttl}
              onChange={this.props.ttlOnChange}/>
          </FormGroup>
        </Form>
      </TabPane>
    );
  }
}