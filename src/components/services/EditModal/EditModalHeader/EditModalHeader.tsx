import * as React from 'react';
import { ModalHeader } from 'reactstrap';

export interface IEditModalHeaderProps {
  service: boolean;
  toggle: any;
}

export default class EditModalHeader extends React.Component<IEditModalHeaderProps, {}>{
  render(){
    let title = this.props.service ? 'Edit service' : 'New service';
    return <ModalHeader toggle={this.props.toggle}>{title}</ModalHeader>;
  }
}