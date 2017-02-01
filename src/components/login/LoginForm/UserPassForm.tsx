import * as React from 'react';
import { Form, FormGroup, Label, Input, Button , Card, CardBlock, FormFeedback } from 'reactstrap';

interface IUserPassFormProps {
  handleLogin(user:string, pass:string) : void;
  error:boolean;
}

interface IUserPassFormState {
  user:string;
  pass:string;
  error?:boolean;
}

export default class UserPassForm extends React.Component<IUserPassFormProps, IUserPassFormState>{
  state = {
    user: '',
    pass: ''
  };

  userOnChange = (evt:any) => {
    this.setState({
      user: evt.target.value
    });
  };

  passOnChange = (evt:any) => {
    this.setState({
      pass: evt.target.value
    });
  };

  handleLogin = (evt:any) => {
    evt.preventDefault();
    this.props.handleLogin(this.state.user, this.state.pass);
  };

  getErrorMessageComponent = () => {
    return this.props.error ? <FormFeedback>There was a problem with your credentials</FormFeedback> : null;
  };

  render(){
    let error = this.props.error,
        errorMessage = this.getErrorMessageComponent();

    return (
      <Form  onSubmit={this.handleLogin}>
        <FormGroup color={error ? "danger" : null}>
          <Label for="user">User</Label>
          <Input type="text" name="user" id="user" value={this.state.user} onChange={this.userOnChange} state={error ? "danger" : null}/>
        </FormGroup>
        <FormGroup color={error ? "danger" : null}>
          <Label for="password">Password</Label>
          <Input type="password" id="password" value={this.state.pass} onChange={this.passOnChange} state={error ? "danger" : null}/>
          { errorMessage }
        </FormGroup>
        <Button >Login</Button>
      </Form>
    );
  }
}