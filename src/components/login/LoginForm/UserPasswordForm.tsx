import * as React from 'react';
import { Form, FormGroup, Label, Input, Button , Card, CardBlock } from 'reactstrap';

export default class UserPasswordForm extends React.Component<{}, {}>{
  render(){
    return (
      <Form>
        <FormGroup>
          <Label for="user">User</Label>
          <Input type="text" name="user" id="user" />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input type="password" id="password"/>
        </FormGroup>
        <Button>Login</Button>
      </Form>
    );
  }
}