import * as React from 'react';
import { TabPane, Label, FormGroup } from 'reactstrap';
import EditableList from '../../../../general/EditableList/EditableList';

interface ISecretPathsSectionProps {
  secretPaths: string[];
  handleSecretPathsAdd: any;
  handleSecretPathsDelete: any;
}

export default class SecretPathsSection extends React.Component<ISecretPathsSectionProps,{}> {
  render() {
    return(
      <TabPane tabId="secretPaths">
        <FormGroup>
          <Label>Secret paths</Label>                
          <EditableList 
            items={this.props.secretPaths} 
            handleAdd={this.props.handleSecretPathsAdd} 
            handleDelete={this.props.handleSecretPathsDelete}
            placeholder="New secret path"/>
        </FormGroup>
      </TabPane>
    );
  }
}