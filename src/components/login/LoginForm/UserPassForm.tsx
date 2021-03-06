import * as React from 'react';
import { 
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  CardBlock,
  FormFeedback,
  Dropdown,
  DropdownItem,
  DropdownToggle, 
  DropdownMenu 
} from 'reactstrap';
let styles = require('./UserPassForm.scss');
declare var csrf_token: string

interface IUserPassFormProps {
  error:boolean;
}

interface IUserPassFormState {
  user:string;
  pass:string;
  error?:boolean;
  dropdownOpen?:boolean;
  activeMethod?:string;
}

export default class UserPassForm extends React.Component<IUserPassFormProps, IUserPassFormState>{
  dropdownOptions = ["userpass", "ldap", "radius"]

  state = {
    user: '',
    pass: '',
    dropdownOpen: false,
    activeMethod: 'userpass'
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

  getErrorMessageComponent = () => {
    return this.props.error ? <FormFeedback>There was a problem with your credentials</FormFeedback> : null;
  };

  toggleDropdown = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  dropdownOptionOnClick = (option:string) => {
    this.setState({
      activeMethod: option
    });
  }

  getMethodDropdown = () => {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown} className={styles.methodDropdown}>
        <DropdownToggle onClick={(evt:any) => {evt.preventDefault()}} caret>
          {this.state.activeMethod}
        </DropdownToggle>
        <DropdownMenu>
          {this.dropdownOptions.map((option, index) => {
            return <DropdownItem key={index} onClick={(evt:any) => {evt.preventDefault(); this.dropdownOptionOnClick(option)}}>{option}</DropdownItem>
          })}
        </DropdownMenu>
      </Dropdown>
    );
  }

  render(){
    let error = this.props.error,
        errorMessage = this.getErrorMessageComponent();

    return (
      <Form action="/ui/login" method="post">
        <Input type="hidden" name="gorilla.csrf.Token" value={csrf_token} />
        <Input type="hidden" name="method" value={this.state.activeMethod} />
        <FormGroup color={error ? "danger" : null}>
          <Label for="user">User</Label>
          <Input type="text" name="user" id="user" value={this.state.user} onChange={this.userOnChange} state={error ? "danger" : null}/>
        </FormGroup>
        <FormGroup color={error ? "danger" : null}>
          <Label for="password">Password</Label>
          <Input type="password" id="password" name="password" value={this.state.pass} onChange={this.passOnChange} state={error ? "danger" : null}/>
          { errorMessage }
        </FormGroup>
        <FormGroup>
          <Label>Method</Label>
          {this.getMethodDropdown()}
        </FormGroup>
        <Button block>Login</Button>
      </Form>
    );
  }
}