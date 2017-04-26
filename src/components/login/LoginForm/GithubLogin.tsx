import * as React from 'react';
import { Button, Form } from 'reactstrap';
import { observer } from 'mobx-react';

interface IGithubLoginProps {
  error:boolean;
  currentDomain?: string;
}

@observer
export default class GithubLogin extends React.Component<IGithubLoginProps, {}>{
  render(){
    const { currentDomain, error } = this.props;
    return (
      <Form action={`/ui/auth/github${currentDomain? "/"+currentDomain: ""}`} method="get">
        <Button style={{width:'100%'}} outline={error} color={error ? "danger" : "secondary"}>
          <i className="fa fa-github fa-lg"/> | Github Login
        </Button>
      </Form>
    );
  }
}