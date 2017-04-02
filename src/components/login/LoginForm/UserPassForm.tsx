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

interface IUserPassFormProps {
  handleLogin(user:string, pass:string) : void;
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
  dropdownOptions = ["vault", "rados", "ldap"]

  state = {
    user: '',
    pass: '',
    dropdownOpen: false,
    activeMethod: 'vault'
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
        <DropdownToggle caret>
          {this.state.activeMethod}
        </DropdownToggle>
        <DropdownMenu>
          {this.dropdownOptions.map((option, index) => {
            return <DropdownItem key={index} onClick={() => this.dropdownOptionOnClick(option)}>{option}</DropdownItem>
          })}
        </DropdownMenu>
      </Dropdown>
    );
  }

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
        <FormGroup>
          <Label>Method</Label>
          {this.getMethodDropdown()}
        </FormGroup>
        <Button >Login</Button>
      </Form>
    );
  }
}