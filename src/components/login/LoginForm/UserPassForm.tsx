import * as React from 'react';
import { Form, FormGroup, Label, Input, Button , Card, CardBlock } from 'reactstrap';

interface IUserPassForm {
  handleLogin(user:string, pass:string) : void;
}
export default class UserPassForm extends React.Component<IUserPassForm, {}>{
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

  render(){
    return (
      <Form  onSubmit={this.handleLogin}>
        <FormGroup>
          <Label for="user">User</Label>
          <Input type="text" name="user" id="user" value={this.state.user} onChange={this.userOnChange}/>
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input type="password" id="password" value={this.state.pass} onChange={this.passOnChange}/>
        </FormGroup>
        <Button >Login</Button>
      </Form>
    );
  }
}