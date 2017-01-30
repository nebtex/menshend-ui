import * as React from 'react';
import { Button } from 'reactstrap';

interface IGithubLoginProps {
  handleLogin() : void;
}

export default class GithubLogin extends React.Component<IGithubLoginProps, {}>{
  render(){
    return <Button style={{width:'100%'}} onClick={this.props.handleLogin}><i className="fa fa-github fa-lg"/> | Github Login</Button>;
  }
}