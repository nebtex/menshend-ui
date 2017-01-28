import * as React from 'react';
import { Container, Popover, PopoverTitle, PopoverContent } from 'reactstrap';

interface IEnvironment {
    name: string  //kuper environment name (default is kuper)
    short_description: string //kuper environment short description (default is the kuper short description)
    long_description: string //kuper environment short description (default is the kuper long description)
}

export default class EnviromentCard extends React.Component<IEnvironment, {}>{
  state = {
    longDescriptionOpen: false
  }

  toggle = () => {
    this.setState({
      longDescriptionOpen: !this.state.longDescriptionOpen
    });
  }

  render(){
    return (
      <Container>
        <h1>{ this.props.name }</h1>
        <p>{ this.props.short_description } <a href="#" onClick={this.toggle} id="environmentLongDescription"> View more </a></p>
        <Popover placement="bottom" isOpen={this.state.longDescriptionOpen} target="environmentLongDescription" toggle={this.toggle}>
          <PopoverContent>{ this.props.long_description }</PopoverContent>
        </Popover>
      </Container>
    );
  }
}