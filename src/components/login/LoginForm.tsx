import * as React from 'react';
import { Form, FormGroup, Label, Input, Button , Card, CardBlock } from 'reactstrap';

class LoginForm extends React.Component<{},{}> {
  render(){
    return (
      <Card>
        <CardBlock>
          <Form>
            <FormGroup>
              <Label for="user">User</Label>
              <Input type="text" name="user" id="email" />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input type="password" id="password"/>
            </FormGroup>
            <Button>Login</Button>
          </Form>
        </CardBlock>
      </Card>
    );
  }
}

export default LoginForm;