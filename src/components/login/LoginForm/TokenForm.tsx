import * as React from 'react';
import { Form, FormGroup, Label, Input, Button , Card, CardBlock, FormFeedback } from 'reactstrap';

interface ITokenFormProps {
  handleLogin(token:string) : void;
  error:boolean;
}

interface ITokenFormState {
  token:string;
  error?:boolean;
}

export default class TokenForm extends React.Component<ITokenFormProps, ITokenFormState>{
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

  getErrorMessageComponent = () => {
    return this.props.error ? <FormFeedback>There was a problem with the given token</FormFeedback> : null;
  };

  render(){
    let error = this.props.error,
        errorMessage = this.getErrorMessageComponent();

    return (
      <Card>
        <CardBlock>
          <Form onSubmit={this.handleLogin}>
            <FormGroup color={error ? "danger" : null}>
              <Label for="token">Token</Label>
              <Input type="text" name="token" id="token" value={this.state.token} onChange={this.tokenOnChange} state={error ? "danger" : null}/>
              { errorMessage }
            </FormGroup>
            <Button>Login</Button>
          </Form>
        </CardBlock>
      </Card>
    );
  }
}