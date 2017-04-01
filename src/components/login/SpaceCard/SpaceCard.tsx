import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';
import { Container, Row, Popover, PopoverTitle, PopoverContent, Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { Space } from '../../../api/api';
import { observer } from 'mobx-react';
let octopusLogo = require('../../../assets/octopus-logo.svg');
let styles = require('./SpaceCard.scss');

export interface ISpaceCardProps {
    space?:Space;
}

interface ISpaceCardState {
  longDescriptionOpen:boolean;
}

@observer class SpaceCard extends React.Component<ISpaceCardProps, ISpaceCardState>{
  state = {
    longDescriptionOpen: false
  }

  static defaultProps:ISpaceCardProps = {
    space: {
      name: 'Kuper',
      shortDescription: 'Kuper is a modern  auth proxy that use vault and consul for manage access policies',
      longDescription: '',
      logo: octopusLogo
    }
  }

  toggleDescription = () => {
    this.setState({
      longDescriptionOpen: !this.state.longDescriptionOpen
    });
  }

  render(){
    const { space } = this.props;
    return (
      <Container>
        <h1>{ space.name }</h1>
        <p>{ space.shortDescription } <a href="#" onClick={this.toggleDescription}> View more </a></p>
        <Modal isOpen={this.state.longDescriptionOpen} toggle={this.toggleDescription} className={styles.modal}>
          <ModalHeader toggle={this.toggleDescription}> {space.name} </ModalHeader>
          <ModalBody>
            <ReactMarkdown source={ space.longDescription }/>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggleDescription}>OK</Button>
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}

export default SpaceCard;