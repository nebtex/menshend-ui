import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';
import { Popover, PopoverTitle, PopoverContent, Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
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
    space: {}
  }

  toggleDescription = () => {
    this.setState({
      longDescriptionOpen: !this.state.longDescriptionOpen
    });
  }

  render(){
    const { space } = this.props;
    return (
      <div>
        <h1>{ space.name || 'Menshend' }</h1>
        <p>
          { space.shortDescription }
          {space.longDescription ? <a href="#" onClick={this.toggleDescription}> View more </a> : null}
        </p>
        <Modal isOpen={this.state.longDescriptionOpen} toggle={this.toggleDescription} className={styles.modal}>
          <ModalHeader toggle={this.toggleDescription}> {space.name} </ModalHeader>
          <ModalBody>
            <ReactMarkdown source={ space.longDescription }/>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggleDescription}>OK</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default SpaceCard;