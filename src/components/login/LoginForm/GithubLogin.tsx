import * as React from 'react';

import { Button, Form } from 'reactstrap';

import { observer } from 'mobx-react';
import clientServiceStore from '../../../stores/clientServiceStore'

interface IGithubLoginProps {
  error:boolean;
}

@observer
export default class GithubLogin extends React.Component<IGithubLoginProps, {}>{
  render(){
    let error = this.props.error;
    return (
      <Form action={`/ui/auth/github${clientServiceStore.currentDomain?"/"+clientServiceStore.currentDomain:""}`} method="get">
        <Button style={{width:'100%'}} outline={error} color={error ? "danger" : "secondary"}>
          <i className="fa fa-github fa-lg"/> | Github Login
        </Button>
      </Form>
    );
  }
}