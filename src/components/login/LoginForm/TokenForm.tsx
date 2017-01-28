import * as React from 'react';
import { Form, FormGroup, Label, Input, Button , Card, CardBlock } from 'reactstrap';

export default class TokenForm extends React.Component<{}, {}>{
  render(){
    return (
      <Card>
        <CardBlock>
          <Form>
            <FormGroup>
              <Label for="token">Token</Label>
              <Input type="text" name="token" id="token" />
            </FormGroup>
            <Button>Login</Button>
          </Form>
        </CardBlock>
      </Card>
    );
  }
}