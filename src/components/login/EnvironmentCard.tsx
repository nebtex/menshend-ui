import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';
import { Container, Popover, PopoverTitle, PopoverContent, Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { ISpace} from '../../models/interface';

interface IEnvironmentCardProps {
    environment:ISpace;
}

interface IEnvironmentCardState {
  longDescriptionOpen:boolean;
}

export default class EnvironmentCard extends React.Component<IEnvironmentCardProps, IEnvironmentCardState>{
  state = {
    longDescriptionOpen: false
  }

  toggleDescription = () => {
    this.setState({
      longDescriptionOpen: !this.state.longDescriptionOpen
    });
  }

  render(){
    let environment = this.props.environment;
    return (
      <Container>
        <h1>{ environment.name }</h1>
        <p>{ environment.short_description } <a href="#" onClick={this.toggleDescription}> View more </a></p>
        <Modal isOpen={this.state.longDescriptionOpen} toggle={this.toggleDescription} >
          <ModalHeader toggle={this.toggleDescription}> {environment.name} </ModalHeader>
          <ModalBody>
            <ReactMarkdown source={ environment.long_description }/>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggleDescription}>OK</Button>
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}