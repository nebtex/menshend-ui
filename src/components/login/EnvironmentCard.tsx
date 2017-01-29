import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';
import { Container, Popover, PopoverTitle, PopoverContent, Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

interface IEnvironment {
    name: string  //kuper environment name (default is kuper)
    short_description: string //kuper environment short description (default is the kuper short description)
    long_description: string //kuper environment short description (default is the kuper long description)
}

export default class EnviromentCard extends React.Component<IEnvironment, {}>{
  state = {
    longDescriptionOpen: false
  }

  toggleDescription = () => {
    this.setState({
      longDescriptionOpen: !this.state.longDescriptionOpen
    });
  }

  render(){
    return (
      <Container>
        <h1>{ this.props.name }</h1>
        <p>{ this.props.short_description } <a href="#" onClick={this.toggleDescription}> View more </a></p>
        <Modal isOpen={this.state.longDescriptionOpen} toggle={this.toggleDescription} >
          <ModalHeader toggle={this.toggleDescription}> {this.props.name} </ModalHeader>
          <ModalBody>
            <ReactMarkdown source={ this.props.long_description }/>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggleDescription}>OK</Button>
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}