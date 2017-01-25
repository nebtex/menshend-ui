import * as React from "react";
///<reference path="../types/reactstrap/index.d.ts" />
import { Button } from 'reactstrap';

interface HelloProps {
  name: string;
}

class Hello extends React.Component<HelloProps, {}> {
  render() {
    return <div>Hello, {this.props.name}</div>;
  }
}

export default Hello;