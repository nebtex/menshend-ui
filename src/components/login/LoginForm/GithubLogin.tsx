import * as React from 'react';
import { Button } from 'reactstrap';

interface IGithubLoginProps {
  handleLogin() : void;
  error:boolean;
}

export default class GithubLogin extends React.Component<IGithubLoginProps, {}>{
  render(){
    let error = this.props.error;
    return (
      <Button style={{width:'100%'}} onClick={this.props.handleLogin} outline={error} color={error ? "warning" : "secondary"}>
        <i className="fa fa-github fa-lg"/> | Github Login
      </Button>
    );
  }
}