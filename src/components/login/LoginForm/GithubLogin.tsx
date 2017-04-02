import * as React from 'react';
import { Button , Form } from 'reactstrap';

interface IGithubLoginProps {
  error:boolean;
}

export default class GithubLogin extends React.Component<IGithubLoginProps, {}>{
  render(){
    let error = this.props.error;
    return (
      <Form action="/uilogin" method="post">
        <input type="hidden" name="method" value="Github"/>
        <Button style={{width:'100%'}} outline={error} color={error ? "danger" : "secondary"}>
          <i className="fa fa-github fa-lg"/> | Github Login
        </Button>
      </Form>
    );
  }
}