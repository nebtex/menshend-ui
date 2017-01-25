import * as React from "react";
import { Button } from 'reactstrap';

interface HelloProps {
  name: string;
}

class Hello extends React.Component<HelloProps, {}> {
  render() {
    return <Button color="primary">Hello, {this.props.name}</Button>;
  }
}

export default Hello;