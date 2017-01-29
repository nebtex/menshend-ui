import * as React from 'react';
import { Form, FormGroup, Label, Input, Button , Card, CardBlock } from 'reactstrap';

interface ITokenForm {
  handleLogin(token:string) : void;
}

export default class TokenForm extends React.Component<ITokenForm, {}>{
  state = {
    token: ''
  };

  handleLogin = (evt:any) => {
    evt.preventDefault();
    this.props.handleLogin(this.state.token);
  };

  tokenOnChange = (evt:any) => {
    this.setState({
      token: evt.target.value
    });
  };

  render(){
    return (
      <Card>
        <CardBlock>
          <Form onSubmit={this.handleLogin}>
            <FormGroup>
              <Label for="token">Token</Label>
              <Input type="text" name="token" id="token" value={this.state.token} onChange={this.tokenOnChange}/>
            </FormGroup>
            <Button>Login</Button>
          </Form>
        </CardBlock>
      </Card>
    );
  }
}